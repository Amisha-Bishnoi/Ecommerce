import React, { useState, useCallback } from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TextField } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search"; 
import * as _ from "lodash";
import cardData from '../../constant/carddata'
import Card from './card'
import '../dashboard/home.css';
import styled from 'styled-components';
import { devices } from '../../constant/devices';

const SearchField = styled(TextField)`
width: 60%;
:focus{
    border: none;
}
@media ${devices.tablet} {
    width: 100%;
}
`;

const Wrapper  = styled.div`
margin: 18px 92px;
@media ${devices.tablet} {
  margin: 1px 10px;
}
`;
const data = [
    {
        "id": "1",
        "cName": "Tops",
        "imgsrc": "/static/media/newtop.2e0a5eae.jpg",
        "title": "Best quality trending tops",
        "alt": "top",
        "type": "top"
    },
    {
        "id": "2",
        "cName": "Tops",
        "imgsrc": "/static/media/top2.ce338c78.jpg",
        "title": "Best quality trending tops",
        "alt": "top",
        "type": "top"
    },
    {
        "id": "3",
        "cName": "Tops",
        "imgsrc": "/static/media/top3.c41f4b51.jpg",
        "title": "Best quality trending tops",
        "alt": "top",
        "type": "top"
    },
    {
        "id": "4",
        "cName": "Tops",
        "imgsrc": "/static/media/top4.187a307a.jpg",
        "title": "Best quality trending tops",
        "alt": "top",
        "type": "top"
    },
    {
        "id": "5",
        "cName": "Jeans",
        "imgsrc": "/static/media/jeans.bbdafab9.jpg",
        "title": "Best quality trending jeans",
        "alt": "jeans",
        "type": "jeans"
    },
    {
        "id": "6",
        "cName": "Jeans",
        "imgsrc": "/static/media/jeans2.f86db3a0.webp",
        "title": "Best quality trending jeans",
        "alt": "jeans",
        "type": "jeans"
    },
    {
        "id": "7",
        "cName": "Jeans",
        "imgsrc": "data:image/jpeg;base64,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",
        "title": "Best quality trending jeans",
        "alt": "jeans",
        "type": "jeans"
    },
    {
        "id": "8",
        "cName": "Jeans",
        "imgsrc": "/static/media/jeans4.e20bce39.webp",
        "title": "Best quality trending jeans",
        "alt": "jeans",
        "type": "jeans"
    },
    {
        "id": "9",
        "cName": "Skirt",
        "imgsrc": "/static/media/skirt.6c9936e9.jpeg",
        "title": "Best quality trending skirt",
        "alt": "skirt",
        "type": "skirt"
    },
    {
        "id": "10",
        "cName": "Skirt",
        "imgsrc": "/static/media/skirt2.416e9fac.jpg",
        "title": "Best quality trending skirt",
        "alt": "skirt",
        "type": "skirt"
    },
    {
        "id": "11",
        "cName": "Skirt",
        "imgsrc": "/static/media/skirt3.d8c69614.jpg",
        "title": "Best quality trending skirt",
        "alt": "skirt",
        "type": "skirt"
    },
    {
        "id": "12",
        "cName": "Skirt",
        "imgsrc": "/static/media/skirt4.d89cfa6d.jpg",
        "title": "Best quality trending skirt",
        "alt": "skirt",
        "type": "skirt"
    },
    {
        "id": "13",
        "cName": "jogger",
        "imgsrc": "/static/media/jogger.0aa2dccd.jpg",
        "title": "Best quality trending jogger",
        "alt": "jogger",
        "type": "jogger"
    },
    {
        "id": "14",
        "cName": "jogger",
        "imgsrc": "/static/media/jogger2.11cb648e.jpg",
        "title": "Best quality trending jogger",
        "alt": "jogger",
        "type": "jogger"
    },
    {
        "id": "15",
        "cName": "jogger",
        "imgsrc": "/static/media/jogger3.1936798a.jpg",
        "title": "Best quality trending jogger",
        "alt": "jogger",
        "type": "jogger"
    },
    {
        "id": "16",
        "cName": "jogger",
        "imgsrc": "/static/media/jogger4.918a8c88.jpg",
        "title": "Best quality trending jogger",
        "alt": "jogger",
        "type": "jogger"
    }
]

const CardDetails = (props) => {
    const [card, setCard] = useState(cardData);

    const autoSearchFun = (query) => {
        console.log("card====+>", card)
        const filteredData = card.filter(item => {
            return Object.keys(item).some(key => item[key]?.toLowerCase()?.includes(query?.toLowerCase()));
        });
        setCard(filteredData)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceLoadData = useCallback(_.debounce(autoSearchFun, 500), [])

    return (
        <> <Wrapper>
            <h1 id="heading">Our Products</h1>
            <SearchField
                label="Saerch..."
                onChange={(e) => {
                    debounceLoadData(e.target.value)
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
            </Wrapper>
            <div className="body">
                {card.map((data) => {
                    return <Card
                        key={data.id}
                        name={data.cName}
                        image={data.imgsrc}
                        title={data.title}
                        alt={data.alt}
                        type={data.type}
                        isMobile={props.isMobile}
                    />
                })}
            </div>
        </>
    )
}

export default CardDetails;