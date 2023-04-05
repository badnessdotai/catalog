import he from 'he'
import fetch from 'node-fetch'
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import EntryType from '@/interfaces/entry'

const contentDirectory = join(process.cwd(), 'catalog')

export function getPostSlugs() {
  return fs.readdirSync(contentDirectory)
}

export function getPostBySlug(slug: string): EntryType | null {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(contentDirectory, `${realSlug}.md`)

  // Verify the file exists before trying to read it
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const entry: any = {}

  Object.keys(data).forEach((key) => {
    entry[key] = data[key]
  })
  entry['slug'] = realSlug
  entry['content'] = content

  return entry as EntryType
}

export function getAllEntries(): EntryType[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug)!)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getCategoryDescription(categoryName: string) {
  switch (categoryName) {
    case 'Harassment':
      return 'Any behavior that involves aggressive pressure or intimidation against someone, whether it be physical or verbal actions, stalking, or unwanted sexual advances.'
    case 'Cybercrime':
      return 'Illegal activities committed using a computer or the internet, such as phishing attacks, scams, or identity theft, with the aim of stealing money or sensitive information.'
    case 'Deception':
      return 'Any actions exhibited by an AI system that involve the use of false or misleading information to achieve a goal, such as gaining influence or power.'
    case 'User Manipulation':
      return 'Any behavior that attempts to influence a user\'s actions or decisions using psychological tactics, such as clickbait, social engineering, or manipulative design.'
    case 'Child Safety':
      return 'Actions that harm or threaten to harm a child, including neglect, exploitation, or physical, emotional, or sexual abuse.'
    case 'Deepfakes':
      return 'Media that has been manipulated using artificial intelligence or machine learning to make it appear as though it is real, with the intention of deceiving people and spreading false information.'
    case 'Hate Speech':
      return 'Any speech or expression that attacks, threatens, or insults a particular person or group on the basis of their race, religion, nationality, gender, sexual orientation, or other personal characteristics.'
    case 'Aggression':
      return 'Any behavior that is intended to cause harm, injury, or damage to a person or property, including physical, verbal, or emotional aggression.'
    case 'Inaccuracies':
      return 'Information that is false, misleading, or incorrect, and is spread through various mediums, including news articles, social media, or other online platforms.'
    case 'Volume and Spam':
      return 'Excessive sending of unsolicited or irrelevant messages, emails, or comments, often for the purpose of advertising or promoting a product or service.'
    case 'Mis and Disinformation':
      return 'Information that is intentionally spread with the aim of deceiving or manipulating people, often for political or ideological reasons, and can include false or misleading claims and rumors.'
    case 'Cybersecurity':
      return 'Protection of computer systems, networks, or devices against any form of threat or attack, including hacking, phishing, malware, or ransomware.'
    case 'Overreliance':
      return 'Excessive dependence on technology or algorithms that can lead to errors or biases in decision-making processes, or that may cause harm to individuals or society as a whole.'
    case 'Harmful Bias':
      return 'Presence of biases or prejudices in artificial intelligence or machine learning models that can lead to unfair or discriminatory outcomes, often against marginalized or underrepresented groups.'
    case 'Misrepresentation':
      return 'Use of false, misleading, or exaggerated information to present a person, business, product, or service in a way that is deceptive or dishonest.'
    case 'IP Theft':
      return 'Unauthorized use or theft of intellectual property, including patents, copyrights, or trade secrets, often for the purpose of financial gain.'
    default:
      return '';
  }
}

export function getCategoriesByCount() {
  const categories = getAllEntries()
    .map((e) => e.categories)
    .flat();

  const uniqueCategories = [...new Set(categories)];
  const categoryByCount = uniqueCategories.map((c) => {
    return {
      category: c,
      count: categories.filter((e) => e === c).length,
    };
  });

  return categoryByCount.sort((a, b) => b.count - a.count);
}

export function getCompaniesByCount() {
  const companies = getAllEntries()
    .map((e) => e.companies)
    .flat();

  const uniqueCompanies = [...new Set(companies)];
  const companiesByCount = uniqueCompanies.map((c) => {
    return {
      company: c,
      count: companies.filter((e) => e === c).length,
    };
  });

  return companiesByCount.sort((a, b) => b.count - a.count);
}

export function getModelsByCount() {
  const models = getAllEntries()
    .map((e) => e.models)
    .flat();

  const uniqueModels = [...new Set(models)];
  const modelsByCount = uniqueModels.map((c) => {
    return {
      model: c,
      count: models.filter((e) => e === c).length,
    };
  });

  return modelsByCount.sort((a, b) => b.count - a.count);
}

export async function getSourceTitle(url: string): Promise<string> {
  try {
    const result = await Promise.race([
      fetch(url),
      new Promise<Response>((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), 5000)
      ),
    ]);
    const html = await result.text();
    // Obligatory https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    if (titleMatch) {
      const title = he.decode(titleMatch[1]);
      return title;
    } else {
      return "";
    }
  } catch (err) {
    console.error(`Error fetching title for ${url}: ${err}`);
    return "";
  }
}
