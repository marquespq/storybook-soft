import{B as n,f as t}from"./index-B0OThvMW.js";import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DZLKizrv.js";import"./index-DJO9vBfz.js";const f=({user:o,onLogin:y,onLogout:b,onCreateAccount:j,imageUrl:h="https://cdn-icons-png.flaticon.com/512/74/74472.png"})=>e.jsx("header",{className:" text-black py-4 px-4 md:px-6 lg:px-8 border-b-2",children:e.jsxs("div",{className:"container mx-auto flex flex-wrap justify-between items-center",children:[e.jsx("div",{className:"flex items-center space-x-4",children:e.jsx("img",{src:h,alt:"Logo",className:"h-10 w-10 rounded-full object-cover"})}),e.jsx("div",{className:"flex-shrink-0",children:o?e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsxs("span",{className:"text-base",children:[e.jsx("b",{children:o.name}),"!"]}),e.jsx(n,{size:"small",onClick:b,label:"Log out"})]}):e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(n,{size:"small",onClick:y,label:"Log in"}),e.jsx(n,{variant:"primary",size:"small",onClick:j,label:"Sign up"})]})})]})});f.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  name: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}}]}},description:""},onLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onLogout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCreateAccount:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},imageUrl:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"https://cdn-icons-png.flaticon.com/512/74/74472.png"',computed:!1}}}};const q={title:"Components/Header",component:f,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{onLogin:t(),onLogout:t(),onCreateAccount:t()}},s={args:{user:{name:"Jane Doe"}}},a={},r={args:{user:{name:"Jane Doe"},imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIP1WY07exNBXDdKoy75b5NDZXkfWmE9Y1BQ&s"}};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    user: {
      name: "Jane Doe"
    }
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,g,x;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    user: {
      name: "Jane Doe"
    },
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIP1WY07exNBXDdKoy75b5NDZXkfWmE9Y1BQ&s"
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const C=["LoggedIn","LoggedOut","CustomImage"];export{r as CustomImage,s as LoggedIn,a as LoggedOut,C as __namedExportsOrder,q as default};
