import styled from 'styled-components'
export const Container = styled.div`
display:flex;  
background:${props=>props.theme.background};
color:${props=>props.theme.color}; 
.options{
    padding:10px;
} 
    .options{
        display:flex;
        flex-direction:column;
        .avatar{
            height:32px;
            width:32px;
            background:${props=>props.theme.color};
            border-radius:25px;
            margin:5px 0px;
        }
        .settings{
            padding:10px;
        }
    }
}

` 