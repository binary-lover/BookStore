import React from 'react'

function Cards({item, url}) {

    return (
        <>
        <div className="p-3">
            <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure><img src={url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.catogory}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge border-black">${item.price}</div>
                        <div className=" hover:bg-pink-500 hover:text-white duration-300 cursor-pointer px-2 py-2 border rounded-3xl">Buy now</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards
