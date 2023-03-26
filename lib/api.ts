import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import EntryType from '@/interfaces/entry'

const contentDirectory = join(process.cwd(), 'catalog')

export function getPostSlugs() {
  return fs.readdirSync(contentDirectory)
}

export function getPostBySlug(slug: string): EntryType {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(contentDirectory, `${realSlug}.md`)
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

export function getAllEntries() {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getCategoryDescription(categoryName: string) {
  switch (categoryName) {
    case 'Harassment':
      return 'The use of aggressive pressure or intimidation againt someone.';
    default:
      return 'This category is yet to be defined.';
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
