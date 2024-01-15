import React from 'react';

function DeckForm({ deck, handleChange, handleSubmit, handleCancel }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='name' className='d-flex justify-content-between'>
          Name
          {deck.name && deck.name.length > 0 && (
            <small className='text-muted'>{deck.name.length}/100</small>
          )}
        </label>

        <input
          type='text'
          className='form-control'
          id='name'
          name='name'
          value={deck.name}
          onChange={handleChange}
          placeholder='Deck Name'
          maxLength='100'
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='description' className='d-flex justify-content-between'>
          Description
          {deck.description && deck.description.length > 0 && (
            <small className='text-muted'>{deck.description.length}/500</small>
          )}
        </label>

        <textarea
          className='form-control'
          id='description'
          rows='3'
          name='description'
          value={deck.description}
          type='text'
          onChange={handleChange}
          placeholder='Brief description of the deck'
          maxLength='500'
          required
        />
      </div>
      <button className='btn btn-secondary' onClick={handleCancel}>
        Cancel
      </button>
      <button type='submit' className='btn btn-primary mx-2'>
        Submit
      </button>
    </form>
  );
}

export default DeckForm;
