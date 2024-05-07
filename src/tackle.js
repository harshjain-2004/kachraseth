const reviews = [
    {
      id: 1,
      dealers:"Same Day Delivery",
        dealers1:" Delivery Service",
      name: "Optics & Modern Physics",
      image: "https://imgs.search.brave.com/Uk-OvBb8Y-wh4EED5sljo_S1aN_4QZi26x91rAPcIJc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/Njc1NzQyL3Bob3Rv/L2Jvb2tzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05aVhS/ZE1zM3NOMjVpSHll/NWtBRkJxRDRUcjFJ/VlI0SVk4Z1hHOGJr/VE1VPQ",
       loc:"Pancheel Vihar Malviya Nagar , Delhi",
       num:9999999999,
           },
    {
        id: 2,
        name: "RD Sharma",
        dealers:"Same Day Delivery",
        dealers1:" Delivery Service",
        image: "https://imgs.search.brave.com/xGRPk39vB3NM_9IhakCCiLsitxeJn9QMPyUMWuiwFWI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTAzOTkxMDUtYzRk/YjVmYjg1YzE4P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRCOGZHSnZi/MnR6ZkdWdWZEQjhm/REI4Zkh3dw",
       loc:"Dno 332 Koyla Nagar,Delhi",
       num:9999999999,
    },
    {
      id: 3,
    
      name: "Problems in General Physics by I.E. Irodov",
      dealers:"Same Day Delivery",
      dealers1:" Delivery Service",
      image:" https://imgs.search.brave.com/jSgEonT4BbRciE-MYavJmsr8kONMAnWAz8AQIODkxqI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/OTkzNjc4L3Bob3Rv/L2Nsb3NlLXVwLXBo/b3RvLW9mLXNpbHZl/ci1jb2xvci1zY3Jh/cC1tZXRhbC1hbmQt/bWV0YWwtdHJhc2gu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PW9Wa05CdFZNNGdD/VGpOMldsOWw1M2x3/ZDJ1NnVyNDBBOWYy/TGFFSE54MGM9",
      loc:"Ram Nagar Kota , Rajasthan",
      num:9999999999,
    },
    {
      id: 4,
    
      dealers:"Same Day Delivery",
        dealers1:" Delivery Service",
      name: "Aptitude Test Problems in Physics by Krotov",
      image: "https://imgs.search.brave.com/3Yr0OXkKGsAkLLb0FLSOFHvbetx5Z_gfMgqD_Ab8-3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzU3LzYxLzIz/LzM2MF9GXzI1NzYx/MjMwNF9MMXBqbnNt/Mk1mTU5JaFNETzR6/UUFyMkg5V3oyVzlR/aC5qcGc",
      loc:"D-87 Basant Vihar , Delhi",
      num:9999999999,
    },
    {
      id: 5,
      name: "lay with Graphs by Amit M Agarwal (Arihant Publications) ",
      dealers:"Same Day Delivery",
        dealers1:" Delivery Service",
      image: "https://imgs.search.brave.com/5md4tqolHulRcGE2po1ABvgBaqrrPJ2n8DK3PcFKvTQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE4d2I5TnRuWUwu/anBn",
      loc:"Lajpat Nagar Market, Chandni Market Delhi",
      num:9999999999,
    },
    {
        id: 6,
       
        name: "Physical Chemistry by O.P. Tandon ",
        dealers:"Same Day Delivery",
        dealers1:" Delivery Service",
        image: "https://content.jdmagicbox.com/comp/pune/p5/020pxx20.xx20.100807105552.y9p5/catalogue/a-g-enterprises-chikhali-pune-e-waste-recycling-q66hpn0zlt-250.jpg",
       loc:"Faridabad Sector-49 , Faridabad",
       num:9999999999,
    },
      {
        id: 7,
        name: "Aptitude Test Problems in Physics by Krotov",
        dealers:"Same Day Delivery",
        dealers1:" Delivery Service",
        image: "https://imgs.search.brave.com/-UKww1OnswTmGcwyPLL0l89MliIXbVAGJTxWHl137Rw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2ltc21tLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvc2l0ZXMv/My8yMDE4LzA0L21l/dGFsLXNjcmFwLTEw/LnBuZw",
       loc:"Talkies Road Shastri Nagar, Guna",
       num:9999999999,
    },
      {
        id: 8,
        name: "Organic Chemistry by O.P. Tandon",
        dealers:"Same Day Delivery",
        dealers1:" Delivery Service",
        image: "https://imgs.search.brave.com/jXoJRqEQRI_yvuZIlB7QiE0SbIsSsEl9Kq6tWeQY99M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS8wNzgyMDdl/Yy9kbXMzcmVwL211/bHRpL29wdC9kb3du/bG9hZC0xMDI0eDc2/OC0xLTE5MjB3LnBu/Zw",
       loc:"Ab Road Vallabh Nagar , Bhopal",
       num:9999999999,
    },
  ];
  
export default reviews;