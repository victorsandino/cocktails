import { css} from 'lit';

export const styles = css`
	.main_container{
		display: block;
		font-family:Georgia, 'Times New Roman', Times, serif ;
		
	}
	.search_bar{
		display: flex;
		margin-top:10vh;
		justify-content: center;
		
	}
	.input_search {
		padding: 10px;
		font-family:Georgia, 'Times New Roman', Times, serif ;
		margin: 0;
		border-right:none;
		border: 3px solid #B79347; 
		border-top-left-radius: 5px; 
		border-bottom-left-radius: 5px;
		outline:none; 
		width:40vw;
		background-color:transparent;
	}
	.search_button {
		margin: 0;
		display: block;
		padding: 10px;
		background-color: #B79347;
		border-top-right-radius: 5px; 
		border-bottom-right-radius: 5px; 
		border: 3px solid #B79347;
		border-left:none; 
	}
	.search_button:hover {
		background-color: #CBB989;
	}
	.search_button:active {
		background-color: #DEDDDE;
	}
	.search_icon {
		width:20px;
	}


    .page_layout{
		margin-top:5vh;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10vw;
		grid-auto-rows: minmax(100px, auto);
		width:80vw;
		margin-left:auto;
		margin-right:auto;
	}
	.search_results{
		grid-column: 1/3 ;
		
	}
	.result_item{
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		margin-bottom: 30px;
		border: 3px solid #B79347;
		border-radius:10px;
		padding:30px; 
	}

	.result_image{
		grid-column: 1;
		width:100%;
	}
	.title_description{
		grid-column: 2/5;
		display:block;
		margin-left:5%;
	}

	.drink_title{
		color: #B79347;
		margin-bottom:10px;
	}

	.button_container{
		position:relative;
	}
	.add_button{
		background-color:#B79347;
		color: white;
		margin-bottom:10px;
		position:absolute;
		bottom:0;
		right:0;
		border: none;
		border-radius:0.5vw;
		font-size:3vw;
		font-weight:extrabold;
		width:4vw;
		height:4vw;
	}
	.add_button:hover{
		background-color: #CBB989;
	}
	.add_button:active {
		background-color: #DEDDDE;
		border: 3px solid #B79347;
	}



	.shopping_list_container {
		grid-column: 3/4;
		position: relative; 
	}

	.shopping_list {
		position: relative;
		right: 0;
		top: 0;
		border: 3px solid #B79347;
		text-align: center;
		background-color: white;
		width:100%;
		padding-top:30px;
		padding-bottom:30px;

	}

	.shopping_list_title {
		color: #B79347;
	}
	.list_items {
		color: #b79347;
		margin-bottom:10px;
	}

	.print_button {
		background-color:#B79347;
		color: white;
		border: none;
		border-radius:0.5vw;
		font-size:1em;
		font-weight:bold;
		padding:10px;
		margin-top:10px;
	}
	.print_button:hover{
		background-color: #CBB989;
	}
	.print_button:active {
		background-color: #DEDDDE;
		border: 3px solid #B79347;
	}

	#toaster {
		color:#B79347;
		margin-top:30px;
	}
`;