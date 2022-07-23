import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { FooterDetail } from "../../constant/constant";



const Container = styled.div`
    margin-top: 50px;
	width: 100%;
	background: #00121b;
   display: block;

.border1 {
	height: 3px;
	width: 40px;
	background: #ff9800;
	color: #ff9800;
	background-color: #ff9800;
	border: 0px;
}

.social-media {
	width: 100%;
	color: #fff;
	text-align: center;
	font-size: 20px;
}

.social-media a {
	text-decoration: none;
}

.social-media i {
	height: 25px;
	width: 25px;
	margin: 20px 10px;
	padding: 4px;
	color: #fff;
	transition: 0.5s;
}

.social-media i:hover {
	transform: scale(1.5);
}

.footer-bottom {
	padding: 10px;
	background: #00121b;
	color: #fff;
	font-size: 12px;
	text-align: center;
}
`;

const Holder = styled.div`
width: 95%;
margin: auto;
padding: 30px 10px;
display: flex;
flex-wrap: wrap;
box-sizing: border-box;
justify-content: center;
`;

const ComHolder = styled.div`
width: 25%;
padding: 10px 20px;
box-sizing: border-box;
color: #fff;
@media screen and (max-width: 1275px) {
  width: 50%;
}

@media screen and (max-width:780px) {
  width: 100%;
}
`;

const Footer = ({ history }) => {
    return (
        <Container>
            <Holder>
                {FooterDetail.map(f => {
                    return (
                        <Fragment>
                            <ComHolder>
                                <h3>{f.fHeader}</h3>
                                <div className="border1"></div>
                                {f.data.map(col => <div>
                                    <label onClick={() => history.push(col.link)}>{col.name}</label>
                                </div>)}
                            </ComHolder>
                        </Fragment>)
                })}
                <div className="social-media">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-google-plus-square"></i></a>
                </div>
            </Holder>

            <div className="footer-bottom">
                Copyright &copy; Test 2020.
        </div>
        </Container>
    )
};
export default withRouter(Footer);
