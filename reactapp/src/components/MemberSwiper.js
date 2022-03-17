import React from 'react';
import { Grid } from '@mui/material';
import { Navigation, Pagination, A11y } from 'swiper';
import CardItem from './CardItem'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MemberSwiper() {
    const membersList = [
        {
            id: "julie", img: "../images/members/Julie-Owono.jpg", imgDesc: "julie-owono",
            name: "Julie Owono",
            role: "Co-Présidente",
            linkedIn: "https://www.linkedin.com/in/julieowono/"
        },
        {
            id: "p.a.", img: "../images/members/Pierre-Alain-Raphan.jpg", imgDesc: "pierre-alain-raphan",
            name: "Pierre-Alain Raphan",
            role: "Co-Président",
            linkedIn: "https://www.linkedin.com/in/pierre-alain-raphan-7aab223b/"
        },
        {
            id: "leila", img: "../images/members/Leila-Morch.jpg", imgDesc: "leila-morch",
            name: "Leïla Mörch Pinchinat",
            role: "Déléguée générale",
            linkedIn: "https://www.linkedin.com/in/le%C3%AFla-m%C3%B6rch-pinchinat-897319b3/"
        },
        {
            id: "lucas", img: "../images/members/Lucas-Sornin.jpg", imgDesc: "lucas-sornin",
            name: "Lucas Sornin",
            role: "Secrétaire général",
            linkedIn: "https://www.linkedin.com/in/lucas-sornin/"
        },
        {
            id: "romain", img: "../images/members/Romain-Defouilhoux.jpg", imgDesc: "romain-defouilhoux",
            name: "Romain Defouilhoux",
            role: "Trésorier",
            linkedIn: "https://www.linkedin.com/in/romain-defouilhoux-72368813b/"
        },
        {
            id: "fadila", img: "../images/members/Fadila-Leturcq.jpg", imgDesc: "fadila-leturcq",
            name: "Fadila Leturcq",
            role: "Membre fondatrice",
            linkedIn: "https://www.linkedin.com/in/fadilaleturcq/"
        },
        {
            id: "anne-charlotte", img: "../images/members/Anne-Charlotte-Monneret.jpg", imgDesc: "anne-charlotte-monneret",
            name: "Anne-Charlotte Monneret",
            role: "Membre fondatrice",
            linkedIn: "https://www.linkedin.com/in/anne-charlotte-monneret-154aa6124/"
        },
        {
            id: "nicolas", img: "../images/members/Nicolas-Pasquier.jpg", imgDesc: "nicolas-pasquier",
            name: "Nicolas Pasquier",
            role: "Membre fondateur",
            linkedIn: "https://www.linkedin.com/in/npasquier/"
        },
        {
            id: "gnagna", img: "../images/members/Gnagna-Mariann-Konate.jpg", imgDesc: "gnagna-marianne-konate",
            name: "Gnagna Mariann Konate",
            role: "Membre fondatrice",
            linkedIn: "https://www.linkedin.com/in/gnagnamariannkonate/"
        },
        {
            id: "françois", img: "../images/members/Francois-Mattens.jpg", imgDesc: "françois-mattens",
            name: "François Mattens",
            role: "Membre fondateur",
            linkedIn: "https://www.linkedin.com/in/francoismatt/?originalSubdomain=fr"
        },
        {
            id: "julien", img: "../images/members/Julien-Barbier.jpg", imgDesc: "julien-barbier",
            name: "Julien Barbier",
            role: "Membre fondateur",
            linkedIn: "https://www.linkedin.com/in/julienbarbier/"
        },
        {
            id: "sabine", img: "../images/members/Sabine-Habibian.jpg", imgDesc: "sabine-habibian",
            name: "Sabine Habibian",
            role: "Membre fondatrice",
            linkedIn: "https://www.linkedin.com/in/sabine-habibian-b6712b5a/"
        },
        {
            id: "nicolas", img: "../images/members/Nicolas-Pasquier.jpg", imgDesc: "nicolas-pasquier",
            name: "Nicolas Pasquier",
            role: "Membre fondateur",
            linkedIn: "https://www.linkedin.com/in/npasquier/"
        },
        {
            id: "reza", img: "../images/members/Reza-Malekzadeh.jpg", imgDesc: "reza-malekzadeh",
            name: "Reza Malekzadeh",
            role: "Membre fondateur",
            linkedIn: "https://www.linkedin.com/in/rezamalekzadeh/"
        },
        {
            id: "marc-lionel", img: "../images/members/Marc-Lionel-Gatto.jpg", imgDesc: "marc-lionel-gatto",
            name: "Marc-Lionel Gatto",
            role: "Membre fondateur",
            linkedIn: "https://www.linkedin.com/in/marclionel/"
        }
    ]

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{ "300": { slidesPerView: 2, spaceBetween: 10 }, "600": { slidesPerView: 2, spaceBetween: 30 }, "900": { slidesPerView: 3, spaceBetween: 40 } }}
            navigation
            pagination={{ clickable: true }}
        >
            <Grid container>
                {membersList.map(member => {
                    return (
                        <SwiperSlide>
                            <CardItem cardID={member.id} img={member.img} imgDesc={member.imgDesc} name={member.name} role={member.role} linkedIn={member.linkedIn} />
                        </SwiperSlide>
                    )
                })}
            </Grid>
        </Swiper>
    );
};