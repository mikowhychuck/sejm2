import MP from '@/components/mp';

export default function MPList({mps} : {mps:any}){
  return (
    <div className="mp-grid">
        {mps.map((mp: any, index: number)=>
          {
            return  <MP key={index} data={mp}/> 
          })}
    </div>
  );
}