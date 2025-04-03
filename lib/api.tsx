const TERM = 10;

export async function getMPs(){
  const response = await fetch(`https://api.sejm.gov.pl/sejm/term${TERM}/MP`);
  if (!response.ok) {
    throw new Error('Failed to fetch mps.');
  }
  return response.json();
}

export async function getMP(id: string){
  const response = await fetch(`https://api.sejm.gov.pl/sejm/term${TERM}/MP/${id}`);
  if (!response.ok) {
    throw new Error('Couldn\'t find a Member of Parliament with given id.');
  }
  return response.json();
}

export async function getClubs(){
  const response = await fetch(`https://api.sejm.gov.pl/sejm/term${TERM}/clubs`);
  if (!response.ok){
    throw new Error('Failed to fetch the clubs');
  }
  return response.json();
}

export async function getClub(id: string){
  const response = await fetch(`https://api.sejm.gov.pl/sejm/term${TERM}/clubs/${id}`);
  if (!response.ok){
    throw new Error('Failed to fetch the club');
  }
  return response.json();
}

export async function getMPsFromClub(id: string){
  const [mps, club] = await Promise.all([getMPs(), getClub(id)]);
  const result = mps.filter((mp: any) => mp.club === club.id);

  return result
}

export async function getVotings() {
  const response = await fetch(`https://api.sejm.gov.pl/sejm/term${TERM}/votings`);
  if(!response.ok){
    throw new Error('Failed to fetch votings');
  }

  return response.json();
}

export async function getVotingsInSeating(id:string){
  const response = await fetch(`https://api.sejm.gov.pl/sejm/term${TERM}/votings/${id}`);
  if(!response.ok){
    throw new Error('Failed to fetch votings');
  }

  return response.json();
}

type votingsData = {
  date: string;
  proceeding: number;
  votingsNum: number;
};

export function countSeatings(data: votingsData[]): number {
  const uniqueProceedings = new Set(data.map(item => item.proceeding));
  return uniqueProceedings.size;
}

export async function getNumOfSeatings(){
  const response = await getVotings();
  return countSeatings(response);
}

export async function getCurrentSeating(){
  const response = await fetch(`https://api.sejm.gov.pl/sejm/term${TERM}/proceedings/current`);
  if (!response.ok){
    throw new Error('Failed to fetch current proceeding.');
  }
  return response.json();
}

export async function getSeating(id: any){
  const response = await fetch(`https://api.sejm.gov.pl/sejm/term${TERM}/proceedings/${id}`);
  if (!response.ok){
    throw new Error('Failed to fetch proceeding.');
  }
  return response.json();
}