---
title: "iPhone Pro — 自定义活动示例"
summary: "一个完全使用自定义 HTML 编排的高端手机促销页面。"
description: "用于展示产品主视觉、功能亮点、型号选择和询盘流程的 iPhone Pro 自定义促销落地页。"
layout: "promotion-custom"
contentMode: "html"
landing: true
noindex: true
excludeFromSearch: true
sitemap:
  disable: true
showForm: true
showSiteHeader: false
showSiteFooter: false
formTitle: "获取 iPhone Pro 资料"
formDescription: "告诉我们您的需求，我们会跟进库存和购买信息。"
formSubject: "iPhone Pro 活动咨询"
customCSS:
  - "campaign.css"
customJS:
  - "campaign.js"
analyticsContent: "iphone-pro-campaign"
---

<div class="iphone-campaign" data-iphone-campaign>
  <nav class="iphone-nav" aria-label="产品导航">
    <a class="iphone-nav__brand" href="#top">iPhone Pro</a>
    <div class="iphone-nav__links">
      <a href="#highlights">亮点</a>
      <a href="#technology">技术</a>
      <a href="#buy">购买</a>
    </div>
    <a class="iphone-nav__button" href="#buy" data-campaign-scroll>购买</a>
  </nav>

  <section class="iphone-hero" id="top">
    <div class="iphone-hero__copy">
      <p class="iphone-kicker">全新 iPhone Pro</p>
      <h1>专业性能。<br><span>更显从容。</span></h1>
      <p class="iphone-hero__intro">精准的钛金属设计、专业影像系统，以及始终领先一步的强劲性能。</p>
      <div class="iphone-hero__actions">
        <a class="iphone-button" href="#buy" data-campaign-scroll>购买 iPhone Pro <span>↗</span></a>
        <span class="iphone-price">起售价 $999</span>
      </div>
      <p class="iphone-hero__note">提供多种机身颜色和存储配置。</p>
    </div>
    <figure class="iphone-hero__visual">
      <div class="iphone-hero__halo"></div>
      <img src="/images/iphone-pro-hero-v2.png" alt="自然钛金属 iPhone Pro 产品展示" loading="eager">
      <figcaption>自然钛金属 · 专业显示屏</figcaption>
    </figure>
  </section>

  <section class="iphone-highlights" id="highlights">
    <div><strong>A18 Pro</strong><span>新一代芯片</span></div>
    <div><strong>48MP</strong><span>专业影像系统</span></div>
    <div><strong>29 小时</strong><span>视频播放</span></div>
    <div><strong>钛金属</strong><span>坚固而轻盈</span></div>
  </section>

  <section class="iphone-technology" id="technology">
    <div class="iphone-section-heading">
      <p class="iphone-kicker">为细节而生</p>
      <h2>每一处设计，<br><span>都更有分寸。</span></h2>
    </div>
    <div class="iphone-tech-grid">
      <article class="iphone-tech-card iphone-tech-card--wide">
        <span class="iphone-tech-card__index">01</span>
        <h3>让更多细节<br>留在镜头里。</h3>
        <p>无论明亮还是暗光环境，专业影像系统都让记录变得更轻松。</p>
      </article>
      <article class="iphone-tech-card iphone-tech-card--light">
        <span class="iphone-tech-card__index">02</span>
        <h3>明亮显示，<br>自然呈现。</h3>
        <p>响应迅速、清晰明亮，带来沉浸而舒适的观看体验。</p>
      </article>
      <article class="iphone-tech-card iphone-tech-card--warm">
        <span class="iphone-tech-card__index">03</span>
        <h3>充沛性能，<br>持续向前。</h3>
        <p>高效而强劲的性能，从容应对工作、娱乐和下一步想法。</p>
      </article>
    </div>
  </section>

  <section class="iphone-buy" id="buy">
    <div class="iphone-buy__copy">
      <p class="iphone-kicker">选择你的 iPhone Pro</p>
      <h2>选出<br><span>你的版本。</span></h2>
      <p>根据日常使用需求选择合适的型号，再联系我们了解库存和购买信息。</p>
    </div>
    <div class="iphone-buy__panel">
      <div class="iphone-models" role="group" aria-label="选择型号">
        <button type="button" class="is-selected" data-iphone-model="pro" aria-pressed="true"><strong>iPhone Pro</strong><span>起售价 $999</span></button>
        <button type="button" data-iphone-model="pro-max" aria-pressed="false"><strong>iPhone Pro Max</strong><span>起售价 $1,199</span></button>
      </div>
      <p class="iphone-buy__availability">提供自然钛金属、蓝色钛金属和黑色钛金属。</p>
      <a class="iphone-button iphone-button--light" href="#promotion-form" data-campaign-scroll>获取详细信息 <span>↗</span></a>
    </div>
  </section>

  <section class="iphone-inquiry" id="promotion-form">
    <div class="iphone-inquiry__heading">
      <p class="iphone-kicker">还有一步</p>
      <h2>准备好，<br><span>就现在。</span></h2>
      <p>留下联系方式，我们会协助你完成下一步。</p>
    </div>
    <!-- shine:promotion-form -->
  </section>
</div>
