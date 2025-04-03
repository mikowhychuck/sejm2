import MP from '@/components/mp';
import classes from './mp.module.css';

export default function MPList({mps} : {mps:any}){
  return (
    <div className={classes.mpgrid}>
        {mps.map((mp: any, index: number)=>
          {
            return  <MP key={index} data={mp}/> 
          })}
    </div>
  );
}