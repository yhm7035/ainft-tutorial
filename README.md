# AINFT tutorial

This is tutorial to make an your own AINFT.

You can complete it, if you just follow steps.

## 1. Environment setup

1. Install nodejs.
    - https://nodejs.org/en/download
2. Clone this repository.
3. Move to repository directory.
```
cd ainft-tutorial
```
4. Install npm packages.
```
npm install
```

## 2. Create AINetwork account
1. Execute __2-create_account.js__ file to create your AINetwork account.
```
node 2-create_account.js
```
2. Your account is created and the account saved at __account.json.__

## 3. Write your own prompt
1. Open any editor you like.
2. Open __prompt.txt__ in that editor.
    1. Prompt example from openai is already written to prompt.txt.
    2. You can use it as it is.
    3. __Or, you can create your own prompt.__
    4. [Here](https://platform.openai.com/docs/guides/completion/conversation) is guide to create prompt.

## 4. Upload your prompt to AINetwork
1. Execute __4-upload_prompt.js__ file to upload prompt text.
```
node 4-upload_prompt.js
```
2. You can check your transaction in this [page](https://testnet-insight.ainetwork.ai/) with transaction hash(tx_hash) value in the response on console.

## 5. Execute chatbot
1. Execute __5-chatbot.js__ file to run AINFT chatbot.
```
node 5-chatbot.js
```
2. Console application will be launched like below.
```
Chat with your AINFT
Enter 'quit()' to stop chat

Welcome!
>
```
3. Enter your message on the right to '__>__'.
4. AINFT chatbot will give you response like below.
```
Chat with your AINFT
Enter 'quit()' to stop chat

Welcome!
> hello
 Hi there! What can I do for you?
> 
```
