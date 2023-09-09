---
permalink: /fur-ever-homes/
title: Fur-ever Homes
page-body: Meet our families!
gallery:
  - path: /20220529_125040.jpg
    title: Pierre
  - path: /20220528_165615.jpg
    title: George
  - path: /20220527_163619.jpg
    title: Marquis
  - path: /20220527_150232.jpg
    title: Ariel
  - path: /20220521_125200.jpg
    title: Caspian
  - path: /20220521_121121.jpg
    title: Eric
  - path: /20220521_110916.jpg
    title: Dylan
  - path: /assets/img/fur-ever-homes/gabriel.jpg
    title: Gabriel
  - path: /assets/img/fur-ever-homes/colton.jpg
    title: Colton
  - path: /assets/img/fur-ever-homes/abigail-and-grant.jpg
    title: Abigail and Grant
  - path: /assets/img/fur-ever-homes/joseph.jpg
    title: Joseph
  - path: /assets/img/fur-ever-homes/dane.jpg
    title: Dane
  - path: /assets/img/fur-ever-homes/jackson-and-xena.jpg
    title: Jackson and Xena
  - path: /assets/img/fur-ever-homes/sealy.jpg
    title: Sealy
  - path: /assets/img/fur-ever-homes/frisco.jpg
    title: Frisco
  - path: /assets/img/fur-ever-homes/dallas.jpg
    title: Dallas
  - path: /assets/img/fur-ever-homes/katy-and-tara.jpg
    title: Katy and Tara
  - path: /assets/img/fur-ever-homes/houston.jpg
    title: Houston
  - path: /assets/img/fur-ever-homes/kylie.jpg
    title: Kylie
  - path: /assets/img/fur-ever-homes/sassy-and-indiana.jpg
    title: Sassy and Indiana
  - path: /assets/img/fur-ever-homes/boston.jpg
    title: Boston
  - path: /assets/img/fur-ever-homes/mocha.jpg
    title: Mocha
  - path: /assets/img/fur-ever-homes/sven.jpg
    title: Sven
  - path: /assets/img/fur-ever-homes/ryder.jpg
    title: Ryder
  - path: /assets/img/fur-ever-homes/brianna.jpg
    title: Brianna
  - path: /assets/img/fur-ever-homes/ella.jpg
    title: Ella
  - path: /assets/img/fur-ever-homes/laura.jpg
    title: Laura
  - path: /assets/img/fur-ever-homes/owen.jpg
    title: Owen
  - path: /assets/img/fur-ever-homes/silas.jpg
    title: Silas
  - path: /assets/img/fur-ever-homes/tina.jpg
    title: Tina
  - path: /assets/img/fur-ever-homes/gail.jpg
    title: Gail
  - path: /assets/img/fur-ever-homes/hans.jpg
    title: Hans
  - path: /assets/img/fur-ever-homes/olaf.jpg
    title: Olaf
  - path: /assets/img/fur-ever-homes/kristoff.jpg
    title: Kristoff
  - path: /assets/img/fur-ever-homes/bryan-and-vanessa.jpg
    title: Bryan and Vanessa
  - path: /assets/img/fur-ever-homes/todd-and-leslie.jpg
    title: Todd and Leslie
  - path: /assets/img/fur-ever-homes/keith-and-kimberly.jpg
    title: Keith and Kimberly
  - path: /assets/img/fur-ever-homes/cloe-and-patricia.jpg
    title: Cloe and Patricia
  - path: /assets/img/fur-ever-homes/glenda-and-joyce.jpg
    title: Glenda and Joyce
  - path: /assets/img/fur-ever-homes/ray-and-kai.jpg
    title: Ray and Kai
  - path: /assets/img/fur-ever-homes/dayton-and-mike.jpg
    title: Dayton and Mike
  - path: /assets/img/fur-ever-homes/idalia-and-her-brother.jpg
    title: Idalia and her brother
  - path: /assets/img/fur-ever-homes/binks-padme-and-josie.jpg
    title: 'Binks, Padme and Josie'
  - path: /assets/img/fur-ever-homes/anakin-malla-and-brian.jpg
    title: 'Anakin, Malla and Brian'
  - path: /assets/img/fur-ever-homes/rose-and-ben.jpg
    title: Rose and Ben
  - path: /assets/img/fur-ever-homes/shmi-and-her-parents.jpg
    title: Shmi and her parents
  - path: /assets/img/fur-ever-homes/zaya-pickle.jpg
    title: Zaya Pickle
  - path: /assets/img/fur-ever-homes/kaden.jpg
    title: Kaden
  - path: /assets/img/fur-ever-homes/skyla-and-chris.jpg
    title: Skyla and Chris
  - path: /assets/img/fur-ever-homes/amanda.jpg
    title: Amanda
  - path: /assets/img/fur-ever-homes/jack.jpg
    title: Jack
  - path: /assets/img/fur-ever-homes/libby.jpg
    title: Libby
---





<section>
  <div class="container">
    <hr class="hr-dark" />

    <div class="row">
      <div class="col text-center">
        <h2 class="section-heading below-hr">{{ page.title }}</h2>
        <p class="section-body">{{ page.page-body }}</p>
      </div>
    </div>

    <div id="portfolio" class="mt-5">
      <div class="gallery">
        {% for image in page.gallery %}
        <div class="portfolio-item">
          <a
            href="#{{ forloop.index }}"
            class="portfolio-link"
            data-toggle="modal"
          >
            <div class="portfolio-hover"></div>
            {% include picture.html path=image.path alt=image.title %}
          </a>
        </div>

        {% endfor %}
      </div>
    </div>
  </div>
</section>

<!-- Fur-ever Homes Modals -->
{% for image in page.gallery %}
<div
  class="portfolio-modal modal"
  id="{{ forloop.index }}"
  tabindex="-1"
  role="dialog"
  aria-hidden="true"
>
  <div class="modal-content">
    <div class="container">
      <div class="row">
        <div class="modal-body">
          <div>
            <div class="family-heading">
              <h2>{{ image.title }}</h2>
              <div class="flex-center">
                {% if forloop.first %}
                <button
                  type="button"
                  class="btn btn-custom"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#{{ forloop.length }}"
                >
                  <i class="fa fa-arrow-left"></i>
                </button>
                {% else %}
                <button
                  type="button"
                  class="btn btn-custom"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#{{ forloop.index | minus: 1 }}"
                >
                  <i class="fa fa-arrow-left"></i>
                </button>
                {% endif %}

                <h3>{{ forloop.index }}/{{ forloop.length }}</h3>
                {% if forloop.last %}
                <button
                  type="button"
                  class="btn btn-custom"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#1"
                >
                  <i class="fa fa-arrow-right"></i>
                </button>
                {% else %}
                <button
                  type="button"
                  class="btn btn-custom"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#{{ forloop.index | plus: 1 }}"
                >
                  <i class="fa fa-arrow-right"></i>
                </button>
                {% endif %}
              </div>
            </div>
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
          </div>
          <hr class="hr-dark my-4" />
          <div class="flex-center">
            {% include picture.html path=image.path alt=image.title
            class="img-fluid" %}
          </div>
          <div class="modal-nav-mobile flex-center px-2">
            {% if forloop.first %}
            <button
              type="button"
              class="btn btn-custom"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#{{ forloop.length }}"
            >
              <i class="fa fa-arrow-left"></i>
            </button>
            {% else %}
            <button
              type="button"
              class="btn btn-custom"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#{{ forloop.index | minus: 1 }}"
            >
              <i class="fa fa-arrow-left"></i>
            </button>
            {% endif %}
            <h4 class="family-heading-text-mobile">{{ image.title }}</h4>
            {% if forloop.last %}
            <button
              type="button"
              class="btn btn-custom"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#1"
            >
              <i class="fa fa-arrow-right"></i>
            </button>
            {% else %}
            <button
              type="button"
              class="btn btn-custom"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#{{ forloop.index | plus: 1 }}"
            >
              <i class="fa fa-arrow-right"></i>
            </button>
            {% endif %}
          </div>
          <h3 class="family-caption my-0 px-4 pb-5">{{ image.subtitle }}</h3>
        </div>
      </div>
    </div>
  </div>
</div>
{% endfor %}
