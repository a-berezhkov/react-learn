import React from "react"
function Drink({ name }) {
    let itemContent = ''
    let plant = 'bean'
    let content = '80–185 mg/cup'
    let age = '1,000+ years'
    if (name === 'tea') {
      plant = 'leaf';
      content = '15–70 mg/cup';
      age = '4,000+ years';
    }
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{plant}</dd>
          <dt>Caffeine content</dt>
          <dd>{content}</dd>
          <dt>Age</dt>
          <dd>{age}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  