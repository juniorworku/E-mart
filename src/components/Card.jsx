export default function Card(props){
    return(
            <div 
                class="w-50 bg-gray-200 text-center border border-gray-200"
                classList={{"rounded-md":props.rounded, "shadow-md":!props.flat}}
            >
                {props.children}
                
            </div>
    )
}