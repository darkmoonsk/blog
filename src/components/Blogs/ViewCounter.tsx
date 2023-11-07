"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react"

const supabase = createClientComponentClient()

interface ViewCounterProps {
  slug: string
  noCount?: boolean
  showCount?: boolean
}

function ViewCounter( { slug, noCount, showCount = true }: ViewCounterProps) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
    try {
      let {error } = await supabase
      .rpc('increment', {
        slug_text: slug
      })

      if (error) {
        console.error("Failed to increment view", error);
      }

    } catch (error) {
      console.error("Um erro ocorreu enquanto se tentava incrementar o contador de visualizações:", error);
    }  
    
  }

  if(!noCount) {
    incrementView();
  }

  }, [slug, noCount])

  useEffect(() => {
    const getViews = async () => {
      try {
        
      let { data, error } = await supabase
      .from('views')
      .select('count')
      .match({slug: slug})
      .single();

      if (error) {
        console.error("Failed to get views count", error);
      }
      
      setViews(data?.count);

      } catch (error) {
        console.error("error: ", error);
      }
    }

    getViews()
  }, [slug])
  
  if(showCount) {
    return <div className="text-base">{views} <span className="text-sm">visualizações</span></div>
  } else {
    return null;
  }
}

export default ViewCounter