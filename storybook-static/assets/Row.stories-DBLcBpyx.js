import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const o=({children:t,className:p,gutters:g="none"})=>{let s="";switch(g){case"sm":s="gx-2";break;case"md":s="gx-4";break;case"lg":s="gx-8";break;default:s=""}return r.jsx("div",{className:`flex flex-wrap ${p} ${s}`,children:t})};o.__docgenInfo={description:"",methods:[],displayName:"Row",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},gutters:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"none"',computed:!1}}}};const w={title:"Components/Row",component:o,tags:["autodocs"],argTypes:{gutters:{control:{type:"select",options:["none","sm","md","lg"]}}}},u=t=>r.jsx(o,{...t}),e=u.bind({});e.args={children:r.jsxs("div",{children:[r.jsx("div",{className:"w-40 bg-red-500 h-20",children:"Column 1"}),r.jsx("div",{className:"w-40 bg-blue-500 h-20",children:"Column 2"})]})};const a=u.bind({});a.args={...e.args,gutters:"md",className:"gx-4"};var n,l,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Row {...args} />",...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"args => <Row {...args} />",...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const h=["Default","WithGutters"];export{e as Default,a as WithGutters,h as __namedExportsOrder,w as default};
