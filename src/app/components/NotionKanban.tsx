"use client"
import { useState, useEffect } from "react"

type Props = {
  databaseId: string
}

export default function KanbanBoard({ databaseId }: Props) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchKanban() {
      try {
        const response = await fetch(`/api/kanban?databaseId=${databaseId}`)
        const data = await response.json()

        // Log des données pour vérifier leur structure
        console.log("Données reçues:", data)

        // Vérifiez que les données ont le format attendu avant de les utiliser
        if (data && data.results) {
          setData(data)
          setLoading(false)
        } else {
          console.error("Format de données inattendu:", data)
          setError("Format de données incorrect")
        }
      } catch (err) {
        setError(err.message)
      }
    }

    fetchKanban()
  }, [databaseId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!data) return <div>No data found</div>

  // Organisez les données pour l'affichage du kanban
  // Cela dépendra de la structure de votre base de données

  return (
    <div className="kanban-board">
      {/* Affichez votre kanban ici en fonction des données */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
