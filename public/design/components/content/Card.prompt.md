**Card** — flat white card with hairline border and gold corner square. Three variants.

```jsx
<Card variant="resource" badge="White paper" image="/img.jpg"
      title="Scaling inference across the edge"
      description="A technical walkthrough of distributed serving."
      action="Read more" />

<Card variant="feature" icon="fa-solid fa-microchip"
      title="Accelerated inference"
      description="Purpose-built for low-latency serving at scale." action="" />

<Card variant="product" image="/sku.jpg" title="AI-100 Accelerator"
      description="Flagship training silicon." action="Learn more" />
```

No shadows — separation is the hairline border. Corner square defaults to top-left; move with `cornerPosition`.
