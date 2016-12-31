# Flashcard-Generator

## Make flash cards
To make new cards, select 'make'.

## Choose between basic or cloze-deleted statements
Put questions, clues, or other hints on the "front", and the answers on the "back".

## Display "front" (question), "back" (answer), or both. Example:
Cards are constructor objects and exported as modules. 
```js
	var newCard = new BasicFlashcard (front, back);
	BasicFlashcard.displayFront();
	BasicFlashcard.displayBack();
	BasicFlashcard.displayAll();
```

## Cards are stored in separate text files for basic or cloze-deleted statements.
Enables users to retrieve stored cards.
To view all cards, select 'view'.
