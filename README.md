# Flashcard-Generator

## Make flash cards
Cards are constructor objects and exported as modules. 
To make new cards, select 'make'.

## Types of flash cards
Choose between basic or cloze-deleted statements.
Put questions, clues, or other hints on the "front", and the answers on the "back".
Cards are stored in separate text files for basic or cloze-deleted statements.

## Displaying cards 
Display "front" (question), "back" (answer), or both. Example:
```js
	var newCard = new BasicFlashcard (front, back);
	BasicFlashcard.displayFront();
	BasicFlashcard.displayBack();
	BasicFlashcard.displayAll();
```

## Storage
Enables users to retrieve stored cards.
To view all cards, select 'view'.
