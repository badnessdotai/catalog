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
