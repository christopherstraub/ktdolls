---
permalink: /about/
title: About Us
first-heading: Family-owned Ragdoll Breeder
first-body: >-
  KTDolls is a family-owned cattery breeding pedigreed Ragdoll kittens.
  Established in 2017, we are located in Katy, Texas, 30 miles west of downtown
  Houston.
first-img: /assets/img/about/1.jpg
first-img-alt: Two cute kittens
second-heading: Healthy and Social Kittens
second-body: >-
  All our litters are registered with TICA. Kittens go to their fur-ever homes
  at 12 weeks of age pre-spoiled, de-wormed and given two rounds of kitten
  vaccines. They are micro-chipped and have a genetic health guarantee for up to
  1 year.
second-img: /assets/img/about/2.jpg
second-img-alt: Peekaboo kitten
queens-and-kings-title: Queens and Kings
queens:
  - name: Lady Annabella
    img: '/assets/img/20230514_142613[1].jpg'
    description: Bella is a beautiful Blue Point Bicolor
  - name: Lady Jessamina
    img: /assets/img/20231125_110542.jpg
    description: Jessa is a beautiful Blue Point Lynx
  - name: Lady Marian
    img: '/assets/img/20240103_141411[1].jpg'
    description: Marian is a beautiful Seal Point Mitted
  - name: 'Princess Pollyanna: Future Queen'
    img: '/assets/img/20240823_215100[1].jpg'
    description: Seal Point Mink
kings:
  - name: Prince Tobias
    img: /assets/img/Screenshot_20240222_215140_Instagram.jpg
    description: Toby is a handsome Blue Point
  - name: 'Blazen Glory: Future King'
    img: '/assets/img/20240813_110405[1].jpg'
    description: Blue Point Bicolor
ragdoll-history-title: Ragdoll History
ragdoll-history-body: >-
  The Ragdoll is a cat breed with blue eyes and varying colours and patterns. It
  is a large and muscular semi-longhair cat with a soft and silky coat. Like all
  long haired cats, Ragdolls need grooming to ensure that their fur does not
  mat. It is recommended Ragdolls are given baths once a month. Developed by
  American breeder Ann Baker in the 1960s, it is best known for its docile and
  placid temperament and affectionate nature. The name "Ragdoll" is derived from
  the tendency of individuals from the original breeding stock to go limp and
  relaxed when picked up. Particularly popular in both the United Kingdom and
  the breed's native United States, ragdoll cats often are known as "dog-like
  cats" or "puppy-like cats" due to behaviors such as their tendency to follow
  people around, their ease at being physically handled, and their relative lack
  of aggression toward other pets.
ragdoll-history-img: /assets/img/about/ragdoll-history.jpg
ragdoll-history-img-alt: A Ragdoll kitten
mink-ragdoll-title: What is a Mink Ragdoll?
mink-ragdoll-body: >-
  Mink Ragdolls have a thicker, plusher coat than traditional Ragdolls, often
  with an extremely plush tail. The coat of a mink is smoother and much softer
  than traditional Ragdolls. Minks usually have aqua colored eyes (sea blue
  green) instead of the blue eyes that the traditional Ragdolls have.
mink-ragdoll-gallery:
  - path: /assets/img/about/gallery/1.jpg
    caption: >-
      Mink kittens are born with their color. Whereas, Traditional kittens are
      born all white.
  - path: /assets/img/about/gallery/2.jpg
    caption: Blue Colorpoint Mink
  - path: /assets/img/about/gallery/3.jpg
    caption: Blue Colorpoint Mink
  - path: /assets/img/about/gallery/4.jpg
    caption: Seal Colorpoint Mink and Seal Colorpoint Traditional
  - path: /assets/img/about/gallery/5.jpg
    caption: Seal Colorpoint Mink
  - path: /assets/img/about/gallery/6.jpg
    caption: Seal Colorpoint Mink
  - path: /assets/img/about/gallery/7.jpg
    caption: Mink and Traditional Kittens
  - path: /assets/img/about/gallery/8.jpg
    caption: Seal Colorpoint Mink and Seal Colorpoint Traditional Kittens
---








<section id="about">
  <div class="container">
    <hr class="hr-dark" />
    <div class="row mb-5">
      <div class="col text-center">
        <h2 class="section-heading below-hr">{{ page.title }}</h2>
      </div>
    </div>

    <div class="row align-items-center mb-6">
      <div class="col-md">
        <div class="row">
          <div class="col">
            <h3 class="section-subheading text-center">
              {{ page.first-heading }}
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="section-body mb-5 mb-md-0">{{ page.first-body }}</p>
          </div>
        </div>
      </div>

      <div class="col-md text-center">
        {% include picture.html path=page.first-img alt=page.first-img-alt
        class="img-fluid rounded border-box-shadow" %}
      </div>
    </div>

    <div class="row align-items-center">
      <div class="col-md text-center order-last order-md-first">
        {% include picture.html path=page.second-img alt=page.second-img-alt
        class="img-fluid rounded border-box-shadow" %}
      </div>
      <div class="col-md order-first order-md-last">
        <div class="row">
          <div class="col">
            <h3 class="section-subheading text-center">
              {{ page.second-heading }}
            </h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="section-body">{{ page.second-body }}</p>
          </div>
          <div class="col-12 text-center">
            <a
              href="/#available-kittens"
              alt="Link to available kittens"
              class="btn btn-xl btn-default mt-5 mb-5 mb-md-0"
              >view available kittens
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="pt-5 pb-5">
  <div class="container">
    <div class="row">
      <div class="col text-center">
        <h2 class="section-heading">{{ page.queens-and-kings-title }}</h2>
      </div>
    </div>

    <!-- Queens -->
    <div class="row mt-5">
      {% for queen in page.queens %} {% assign remainder = page.queens.size |
      modulo: 2 %} {% if remainder != 0 and forloop.index == page.queens.size %}
      <div class="col-md-12 text-center mb-5">
        <h3 class="title mb-4">{{ queen.name }}</h3>
        {% include picture.html path=queen.img alt=queen.description
        class="img-fluid rounded mb-4 border-box-shadow" %}
        <p class="caption text-center">{{ queen.description }}</p>
      </div>
      {% else %}
      <div class="col-md-6 text-center mb-5">
        <h3 class="title mb-4">{{ queen.name }}</h3>
        {% include picture.html path=queen.img alt=queen.description
        class="img-fluid rounded mb-4 border-box-shadow" %}
        <p class="caption text-center">{{ queen.description }}</p>
      </div>
      {% endif %} {% endfor %}
    </div>

    <hr />

    <!-- Kings -->
    <div class="row mt-5">
      {% for king in page.kings %} {% assign remainder = page.kings.size |
      modulo: 2 %} {% if remainder != 0 and forloop.index == page.kings.size %}
      <div class="col-md-12 text-center mb-5">
        <h3 class="title mb-4">{{ king.name }}</h3>
        {% include picture.html path=king.img alt=king.description
        class="img-fluid rounded mb-4 border-box-shadow" %}
        <p class="caption text-center">{{ king.description }}</p>
      </div>
      {% else %}
      <div class="col-md-6 text-center mb-5">
        <h3 class="title mb-4">{{ king.name }}</h3>
        {% include picture.html path=king.img alt=king.description
        class="img-fluid rounded mb-4 border-box-shadow" %}
        <p class="caption text-center">{{ king.description }}</p>
      </div>
      {% endif %} {% endfor %}
    </div>
  </div>
</section>

<section class="bg-light-gray">
  <div class="container">
    <div class="row align-items-end">
      <div class="col text-center">
        <h2 class="section-heading">{{ page.ragdoll-history-title }}</h2>
      </div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6">
        <p class="section-body mb-5 mb-md-0">{{ page.ragdoll-history-body }}</p>
      </div>
      <div class="col-md-6">
        {% include picture.html path=page.ragdoll-history-img
        alt=page.ragdoll-history-img-alt class="img-fluid rounded
        border-box-shadow" %}
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <a
          href="https://en.wikipedia.org/wiki/Ragdoll"
          target="_blank"
          alt="Link to Wikipedia article on the Ragdoll cat breed"
          class="btn btn-xl btn-default-bg-light-gray mt-5"
          >find out more
        </a>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="section-heading text-center">
          {{ page.mink-ragdoll-title }}
        </h2>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col col-lg-6">
        <p class="section-body mb-5">{{ page.mink-ragdoll-body }}</p>
      </div>
    </div>

    <div
      id="{{ page.mink-ragdoll-title | slugify }}-carousel"
      class="carousel slide mx-auto"
      data-ride="carousel"
    >
      <div class="carousel-inner text-center">
        {% for image in page.mink-ragdoll-gallery %} {% if forloop.first %}
        <div class="carousel-item active">
          {% include picture.html path=image.path alt=image.caption
          class="img-fluid" %} {% unless image.caption == '' %}
          <div class="carousel-caption">
            <h3 class="mb-0">{{ image.caption }}</h3>
          </div>
          {% endunless %}
        </div>
        {% else %}
        <div class="carousel-item">
          {% include picture.html path=image.path alt=image.caption
          class="img-fluid" %} {% unless image.caption == '' %}
          <div class="carousel-caption">
            <h3 class="mb-0">{{ image.caption }}</h3>
          </div>
          {% endunless %}
        </div>
        {% endif %} {% endfor %}
      </div>
      <a
        class="carousel-control-prev"
        href="#{{ page.mink-ragdoll-title | slugify }}-carousel"
        role="button"
        data-slide="prev"
        ><div>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </div>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#{{ page.mink-ragdoll-title | slugify }}-carousel"
        role="button"
        data-slide="next"
      >
        <div>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </div>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</section>
