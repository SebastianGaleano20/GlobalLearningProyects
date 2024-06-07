import clubs from '../database/clubs.json';
import fs from 'node:fs';

export const getClubs = () =>{
    try{
        return clubs
    }catch (error){
        throw new Error('404 NOT FOUND');
    }
} 