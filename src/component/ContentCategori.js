import ContentItems from "./ContentItems";


let contentInfo  = [
  {
    id : 1,
    title :"인기드라마",
    categori : {
      genre : "인기",
      type : "드라마"
    }
  }, 
  {
    id : 2,
    title: "#로맨스",
    categori : {
      genre : "로맨스",
      type : "all"
    }
  },
  {
    id : 3,
    title : "#시트콤 #코미디",
    categori : {
      genre : "코미디",
      type : "all"
    }
  },
  {
    id : 4,
    title : "#범죄 #수사",
    categori : {
      genre : "추리",
      type : ["영화","교양","드라마"]
    }
  },
  {
    id : 5,
    title : "#미스터리 #스릴러",
    categori : {
      genre : ["미스테리" ,"미스터리", "오락"],
      type : "all"
    }
  }
]

let content = contentInfo.map( data => {
  return(
    <li key={data.id} className="overflow-hidden w-full">
      <h4 className="text-2xl mb-5">{data.title}</h4>
      <ContentItems cate={data.categori}  />      
    </li>
  )
})

const ContentCategori = () => {
  return(
    <div className="grid-1240 overflow-hidden relative">
      <ul className="mx-auto w-[1240px]">
        {content}
      </ul>
    </div>
  )
}

export default ContentCategori