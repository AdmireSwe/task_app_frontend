import Head from "next/head";
import Link from "next/link";
import indexstyles from '@/styles/Header.module.css';



export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Task App</title>
      </Head>


    
      <h1 className={indexstyles.title}><span>How to use this Application?</span>
      <div className={indexstyles.card}>
      <p className={indexstyles.description}> Application has two parts. One is for desplaying all Task 
        and the other is to display all users. Tasks part of the application desplays tasks.
        Users part of the application desplays users.
        All crud operations that are happening are happening through api calls.
        No CRUD operations have been implemented to the frontEnd becouse specification 
        only asked for desplaying the data. 

        CRUD operations can be tested through API tools like Postman
      </p></div>
      <div className={indexstyles.card}>
      <p className={indexstyles.description}> This is a Application made with Next.js as a frontEnd framework
                and Laravel as a backEnd framework. 
                It utilzes the Api and works on Localhost.
                Both Next.js is a server-side rendering React framework that allows 
                for smoother and faster loading.
                Other then that Next.js is a SEO friendly framework that exposes 
                the whole DOM-tree for search engine allowing webcrowlers for precise 
                to better index the web-page.
      </p></div>
     <div className={indexstyles.card}> <p className={indexstyles.description}> Laravel is a PHP based framework that has for the past years developed into a powerfull 
                API tool with fast integration. It has many libraries that help with securing it API´S like 
                token based authentication with Laravel Sanctum.
      </p></div>
      </h1>
    </div>
  )
};

