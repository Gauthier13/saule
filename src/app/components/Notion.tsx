"use client"

import { useState } from "react"
import NotionKanban from "./NotionKanban"

export default function Notion() {
  const [databaseId, setDatabaseId] = useState("")
  const [showKanban, setShowKanban] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowKanban(true)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notion Kanban Viewer</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={databaseId}
            onChange={(e) => setDatabaseId(e.target.value)}
            placeholder="Entrez l'ID de la base de données Notion"
            className="flex-1 p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Afficher Kanban
          </button>
        </div>
        <p className="text-sm mt-2 text-gray-600">
          {
            "L'ID se trouve dans l'URL de votre base Notion (format: 8c2db39761694c4c9826be8e ...)"
          }
        </p>
      </form>

      {showKanban && <NotionKanban databaseId={databaseId} />}
    </div>
  )
}
