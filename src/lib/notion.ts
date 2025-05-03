import { Client } from "@notionhq/client"

if (!process.env.NOTION_TOKEN) {
  console.error(
    "ATTENTION: NOTION_TOKEN n'est pas défini dans vos variables d'environnement"
  )
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export default notion
