const SearchBar = ({value,input})=>{
    return(
        <>
        <input type="text" value ={value} onChange={input} className="input"/>
        </>
    )
}
export default SearchBar;