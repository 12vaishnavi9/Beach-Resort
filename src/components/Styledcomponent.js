import styled from "styled-components";

const StyledImg=styled.header`
background:url(${props=>props.img}) center/cover no-repeat;
min-height:60vh;
display:flex;
align-items:center;
justify-content:center;
`;

export default StyledImg;