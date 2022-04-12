import instance from './instance';
import { CategoryType } from '../types/category';
export const listCate = () => {
    const url = '/category';
    return instance.get(url);
}
export const addCate = (Category:CategoryType) =>{
    const url = `/category`;
    return instance.post(url,Category);
}
export const removeCate = (id: number) => {
    const url = `/ctegory/${id}`;
    return instance.delete(url);
}
export const updateCate = (Category:CategoryType) =>{
    const url = `/category/${Category.id}`;
    return instance.put(url,Category);
}
export const readCate = (id:number) =>{
    const url = `/category/${id}`;
    return instance.get(url);
}