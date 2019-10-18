import styled from 'styled-components'
import {pink} from './Main';

export const StyledHeader= styled.header`
 background-color:#0B002A;
 color:white;
 overflow:auto;
 padding:20px 14px;

 .logo{
    float:left;
  }


 .nav{
     float:right;


    a{
        color:white;
        text-decoration:none;
        padding:7px 20px;
        text-transform:captalize;
        font-weight:300;
        font-size:.9rem;


        &.register-btn{
            background-color:${pink};
            padding:10px 25px;
            text-align:center;
            color:white;
            border-radius:5px;

        }
    }

   
    a:hover{
        color:#F26B8F;
        cursor:pointer;
    }
 }
`;