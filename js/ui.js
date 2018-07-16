class UI {
    constructor() { 
        this.init();
    }
    

    init() { 
        this.printCryptoCurrencies(); 
    }

    printCryptoCurrencies() { 
        cryptoAPI.getCryptoCurrenciesList() 
            .then(data => { 
                
                const cryptoCurrencies = data.cryptoCurrencies; 
                const select = document.getElementById('cryptocurrency')
                
                cryptoCurrencies.forEach(currency => { 
                    
                    const option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option); 
                })
                
            })
    }

    printMessage(message, className) { 
        let div = document.createElement('div'); 
        div.classList=className; 
        div.innerText = message; 
        document.querySelector('.messages').appendChild(div);

        setTimeout(function(){ document.querySelector('.messages div').remove()}, 3000);
    }
    
    displayResult(result, currency) { 

       let currencyName = "price_"+currency.toLowerCase();
        const value = result[currencyName]
            const prevResult = document.querySelector('#result > div');
            if(prevResult) { 
                prevResult.remove();
            }
        
        let HTMLtemplate = '';
        
         HTMLtemplate += `<div class="card cyan darken=3"> 
            <span class="card-title white-text">Result</span>
            <p>The price of ${result.name} is ${currency} ${value}</p>
            <p>Last Hour: ${result.percent_change_1h} %</p>
            <p>Last day: ${result.percent_change_24h} %</p>
            <p>Last 7 days: ${result.percent_change_7d} %</p>
        </div>

        `
        this.showSpinner();  

        setTimeout(()=> { 
            const divResult = document.querySelector('#result');
            divResult.innerHTML = HTMLtemplate; 

            document.querySelector('.spinner img').remove();
        }, 3000)
        
        
        
    }


    showSpinner() { 
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = 'img/spinner.gif'; 
        document.querySelector('.spinner').appendChild(spinnerGIF)
    }
}

