import { component, html, useState } from 'haunted';
import './styles.css';
import { styles } from './styles';
import searchicon from './assets/search.svg';





interface Cocktail {
  strDrinkThumb: string;
  strDrink: string;
  strInstructions: string;
  ingredients: string[];
}

function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Cocktail[]>([]);
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [toasterMessage, setToasterMessage] = useState<string>('');
  const [toasterMessageType, setToasterMessageType] = useState<string>('');


  const handleSearch = async () => {
    try {
      showToast('Searching...', 'searching');
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
      );
      const data = await response.json();
      const drinks = data.drinks || [];

      if (drinks.length > 0) {
        // Display results message
        showToast('Here are the results.', 'results');
      } else {
        // Display no results message
        showToast('No results found.', 'noResults');
      }

      setSearchResults(drinks);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  const addToShoppingList = (result: Cocktail) => {
    const ingredients: string[] = [];
  
  // Loop through strIngredient properties and add non-null values to the ingredients array
  for (let i = 1; i <= 15; i++) {
    const ingredient = result[`strIngredient${i}` as keyof Cocktail];
    if (ingredient) {
      if (Array.isArray(ingredient)) {
        ingredients.push(...ingredient);
      } else {
        ingredients.push(ingredient);
      }
    }
  }
  
    setShoppingList((prevList = []) => {
      const newIngredients = ingredients.filter((ingredient) => !prevList.includes(ingredient));
      return [...prevList, ...newIngredients];
    });
  
    showToast('Ingredients added to shopping list.', 'addedToShoppingList');
  };

  

  const printShoppingList = () => {
    const shoppingListText = shoppingList.join('\n');
    const printWindow = window.open('', '_blank');

    if (printWindow) {
      printWindow.document.write(`<pre>${shoppingListText}</pre>`);
      printWindow.print();
    } else {
      console.error('Failed to open print window.');
    }
  };

  const showToast = (message: string, messageType: string) => {
    setToasterMessage('');
    setToasterMessageType('');
    setToasterMessage(message);
    setToasterMessageType(messageType);

    if (messageType !== 'searching') {
      setTimeout(() => {
        setToasterMessage('');
        setToasterMessageType('');
      }, 3000);
    }
  };



  return html`
  <style>
    ${styles}
  </style>
    <div class="main_container">
      <div class="search_bar">
        <input
          class="input_search"
          type="text"
          placeholder="Search cocktails..."
          .value=${searchQuery}
          @input=${(e: InputEvent) => setSearchQuery((e.target as HTMLInputElement).value)}
        />
        <button @click=${handleSearch} class="search_button">
          <img src=${searchicon} alt="Search" class="search_icon" />
        </button>

      </div>
      <div class="page_layout">
        <div class="search_results">
          ${searchResults.map(
            (result) => html`
              <div class="result_item"> 
                <img class="result_image" src="${result.strDrinkThumb}" alt="${result.strDrink}" />

                <div class="title_description">
                  <h2 class="drink_title">${result.strDrink}</h2>
                  <div class="description">${result.strInstructions}</div>
                </div>
                <div class="button_container">
                  <button class="add_button" @click=${() => addToShoppingList(result)}>
                    +
                  </button>
                </div>
              </div>
            `
          )}
        </div>
        <div class="shopping_list_container">
          <div class="shopping_list">
            <div>
              <h2 class="shopping_list_title" >Shopping List</h2>
              ${shoppingList.map((item) => html`<div class="list_items">${item}</div>`)}
            </div>
            <button class="print_button" @click=${printShoppingList}>Print Shopping List</button>
          </div>
          <div  id="toaster">${toasterMessage}</div>
        </div>
      </div>
    </div>
  `;
};

customElements.define("my-app", component(App));