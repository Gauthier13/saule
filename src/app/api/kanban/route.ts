import notion from "@/lib/notion"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const databaseId = url.searchParams.get("databaseId")

    if (!databaseId) {
      return NextResponse.json({ error: "Database ID requis" }, { status: 400 })
    }

    // Fetcher les données de Notion
    const response = await notion.databases.query({
      database_id: databaseId,
    })

    return NextResponse.json(response)
  } catch (error) {
    console.error("Erreur Notion:", error)

    return NextResponse.json(
      {
        error: "Erreur lors de la requête à Notion",
        message: error.message,
      },
      { status: 500 }
    )
  }
}
