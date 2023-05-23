import { experiences } from "@/profile";

const ExperienceView = () => {
    return ( 
        <div className="bg-zinc-200 text-black">
            <h1>
                Experience
            </h1>
            <ul>
                  {experiences.map(({title,from,to,description},index)=>(
                    <li key={index}>
                      <h3>{title}</h3>
                      <h5>{from}-{to}</h5>
                      <p>{description}</p>
                      </li>
                  ))}
            </ul>
        </div>
     );
}
 
export default ExperienceView;