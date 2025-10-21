import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams(); // string
    const data = useLoaderData();
    // console.log({id, data});

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() =>{
        if (id == "0") {
            setCategoryNews(data)
        }else if(id == "1") {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews);
        }else{
            const filteredNews = data.filter(news => news.category_id == id);
            setCategoryNews(filteredNews);
            console.log(filteredNews);
        }
    },[id, data])

    return (
        <div>
            <h2 className="font-bold mb-5">
                Total <span className="text-secondary">{categoryNews.length}</span> news
                Found
            </h2>

            <div className="grid grid-cols-1 gap-5">
                <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                    {
                        categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default CategoryNews;