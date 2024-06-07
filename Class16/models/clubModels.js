import clubs from '../database/clubs.json' assert { type: 'json'};

export const getClubs = () =>{
    try{
        return clubs
    }catch (error){
        throw new Error('404 NOT FOUND');
    }
} 
