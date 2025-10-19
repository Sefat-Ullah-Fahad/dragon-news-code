import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';

const CategoryNews = () => {

    const {id} = useParams()
    const data = useLoaderData()
    console.log(id, data)

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(()=>{
        if(id == '0'){
            setCategoryNews(data)
        }
        else if (id == '1'){
            const filteredNews = data.filter(news => news.others.is_today_pick == true)

            setCategoryNews(filteredNews)
        }
        else{
            const filteredNews = data.filter(news => news.category_id == id)

            setCategoryNews(filteredNews)
        }
    },[id,data])


    // useEffect(() => {
    //     if(id == 0) {
    //         setCategoryNews(data)
    //         return
    //     }
    //     else if(id == '1'){
    //         const filteredNews = data.filter(news => news.others.is_today_pick == true)
    //         setCategoryNews(filteredNews)
    //     }
    //     else{
    //         const filteredNews = data.filter(news => news.category_id == id)
    //     setCategoryNews(filteredNews)
    //     console.log(filteredNews)
    //     }
        
    // },[data, id])

    return (
        <div>
            <h1 className='font-bold mb-5'>Total <span className='text-secondary italic'>{categoryNews.length}</span> News Found </h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => <NewsCard 
                        news={news}
                        key={news.id}
                        ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;