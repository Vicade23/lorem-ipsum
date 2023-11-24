const texts = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque ab beatae! Saepe praesentium 
    consequuntur cumque illo, ut fuga, molestias non cupiditate neque quibusdam impedit eum asperiores! Sapiente 
    at officia quod excepturi. Dignissimos velit, aliquid maxime quis adipisci voluptates corrupti.`,
    
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque ab beatae! Saepe praesentium 
    consequuntur cumque illo, ut fuga, molestias non cupiditate neque quibusdam impedit eum asperiores! Sapiente 
    at officia quod excepturi. Dignissimos velit, aliquid maxime quis adipisci voluptates corrupti.`,
    
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque ab beatae! Saepe praesentium 
    consequuntur cumque illo, ut fuga, molestias non cupiditate neque quibusdam impedit eum asperiores! Sapiente 
    at officia quod excepturi. Dignissimos velit, aliquid maxime quis adipisci voluptates corrupti.`,
    
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque ab beatae! Saepe praesentium 
    consequuntur cumque illo, ut fuga, molestias non cupiditate neque quibusdam impedit eum asperiores! Sapiente 
    at officia quod excepturi. Dignissimos velit, aliquid maxime quis adipisci voluptates corrupti.`,
    
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque ab beatae! Saepe praesentium 
    consequuntur cumque illo, ut fuga, molestias non cupiditate neque quibusdam impedit eum asperiores! Sapiente 
    at officia quod excepturi. Dignissimos velit, aliquid maxime quis adipisci voluptates corrupti.`,
    
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque ab beatae! Saepe praesentium 
    consequuntur cumque illo, ut fuga, molestias non cupiditate neque quibusdam impedit eum asperiores! Sapiente 
    at officia quod excepturi. Dignissimos velit, aliquid maxime quis adipisci voluptates corrupti.`,
    
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque ab beatae! Saepe praesentium 
    consequuntur cumque illo, ut fuga, molestias non cupiditate neque quibusdam impedit eum asperiores! Sapiente 
    at officia quod excepturi. Dignissimos velit, aliquid maxime quis adipisci voluptates corrupti.`,
    
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque ab beatae! Saepe praesentium 
    consequuntur cumque illo, ut fuga, molestias non cupiditate neque quibusdam impedit eum asperiores! Sapiente 
    at officia quod excepturi. Dignissimos velit, aliquid maxime quis adipisci voluptates corrupti.`,
    
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque ab beatae! Saepe praesentium 
    consequuntur cumque illo, ut fuga, molestias non cupiditate neque quibusdam impedit eum asperiores! Sapiente 
    at officia quod excepturi. Dignissimos velit, aliquid maxime quis adipisci voluptates corrupti.`
    
]

const numberInput = document.getElementById('number');
const form = document.getElementById('form');
const paragContainer = document.querySelector('.paragraph-container');

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const values = parseInt(numberInput.value);

    if(isNaN(values) || values <= 0 || values > 9) {
        alert('Bruh!!')
    }
    else {
        const provideParag = texts.slice(0, values);
        const w = provideParag.map((pp)=>{
            const inMap = `<p>${pp}</P>`;
            return inMap;
        }).join('')
        paragContainer.innerHTML = w;
        console.log('Yeah')
    }
})