import{j as y}from"./jsx-runtime-CkxqCPlQ.js";import{r as b}from"./index-DJO9vBfz.js";const p=({value:e,onChange:u,placeholder:o="",type:l="text"})=>y.jsx("input",{type:l,value:e,onChange:u,placeholder:o,className:"border border-gray-300 p-2 rounded"});p.__docgenInfo={description:"",methods:[],displayName:"Input",props:{value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"text"',computed:!1}}}};const R={title:"Components/Input",component:p,tags:["autodocs"]},s=e=>{const[u,o]=b.useState(e.value||""),l=c=>{var i;o(c.target.value),(i=e.onChange)==null||i.call(e,c)};return y.jsx(p,{...e,value:u,onChange:l})},t=s.bind({});t.args={placeholder:"Digite algo"};const n=s.bind({});n.args={value:"Valor inicial",placeholder:"Digite algo"};const a=s.bind({});a.args={placeholder:"Senha",type:"password"};const r=s.bind({});r.args={placeholder:"Digite seu nome"};var g,d,m;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & InputProps) => {
  const [value, setValue] = useState(args.value || "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange?.(event);
  };
  return <Input {...args} value={value} onChange={handleChange} />;
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var v,h,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & InputProps) => {
  const [value, setValue] = useState(args.value || "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange?.(event);
  };
  return <Input {...args} value={value} onChange={handleChange} />;
}`,...(C=(h=n.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var I,E,S;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & InputProps) => {
  const [value, setValue] = useState(args.value || "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange?.(event);
  };
  return <Input {...args} value={value} onChange={handleChange} />;
}`,...(S=(E=a.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var T,V,f;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`(args: JSX.IntrinsicAttributes & InputProps) => {
  const [value, setValue] = useState(args.value || "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    args.onChange?.(event);
  };
  return <Input {...args} value={value} onChange={handleChange} />;
}`,...(f=(V=r.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};const H=["Default","WithInitialValue","PasswordType","CustomPlaceholder"];export{r as CustomPlaceholder,t as Default,a as PasswordType,n as WithInitialValue,H as __namedExportsOrder,R as default};
