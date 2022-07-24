'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">realworld-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-835a2d304c6101473a725bf529a0f57370e5cef81352bbf3b33ba2ab502e08258207cfc6f1f4f5f40c58cb5d486a035f683499270eb7c50220dfba0a9f4256a7"' : 'data-target="#xs-controllers-links-module-AppModule-835a2d304c6101473a725bf529a0f57370e5cef81352bbf3b33ba2ab502e08258207cfc6f1f4f5f40c58cb5d486a035f683499270eb7c50220dfba0a9f4256a7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-835a2d304c6101473a725bf529a0f57370e5cef81352bbf3b33ba2ab502e08258207cfc6f1f4f5f40c58cb5d486a035f683499270eb7c50220dfba0a9f4256a7"' :
                                            'id="xs-controllers-links-module-AppModule-835a2d304c6101473a725bf529a0f57370e5cef81352bbf3b33ba2ab502e08258207cfc6f1f4f5f40c58cb5d486a035f683499270eb7c50220dfba0a9f4256a7"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-835a2d304c6101473a725bf529a0f57370e5cef81352bbf3b33ba2ab502e08258207cfc6f1f4f5f40c58cb5d486a035f683499270eb7c50220dfba0a9f4256a7"' : 'data-target="#xs-injectables-links-module-AppModule-835a2d304c6101473a725bf529a0f57370e5cef81352bbf3b33ba2ab502e08258207cfc6f1f4f5f40c58cb5d486a035f683499270eb7c50220dfba0a9f4256a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-835a2d304c6101473a725bf529a0f57370e5cef81352bbf3b33ba2ab502e08258207cfc6f1f4f5f40c58cb5d486a035f683499270eb7c50220dfba0a9f4256a7"' :
                                        'id="xs-injectables-links-module-AppModule-835a2d304c6101473a725bf529a0f57370e5cef81352bbf3b33ba2ab502e08258207cfc6f1f4f5f40c58cb5d486a035f683499270eb7c50220dfba0a9f4256a7"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArticleModule.html" data-type="entity-link" >ArticleModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ArticleModule-5a64d3f23dbfc498c2ec7ba42e5372cb4310c4de2153142950ee653f536d725440944aafaeefc868a61dade46bc6037b2360a9c98b4645a8a051877a457d7ec7"' : 'data-target="#xs-controllers-links-module-ArticleModule-5a64d3f23dbfc498c2ec7ba42e5372cb4310c4de2153142950ee653f536d725440944aafaeefc868a61dade46bc6037b2360a9c98b4645a8a051877a457d7ec7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ArticleModule-5a64d3f23dbfc498c2ec7ba42e5372cb4310c4de2153142950ee653f536d725440944aafaeefc868a61dade46bc6037b2360a9c98b4645a8a051877a457d7ec7"' :
                                            'id="xs-controllers-links-module-ArticleModule-5a64d3f23dbfc498c2ec7ba42e5372cb4310c4de2153142950ee653f536d725440944aafaeefc868a61dade46bc6037b2360a9c98b4645a8a051877a457d7ec7"' }>
                                            <li class="link">
                                                <a href="controllers/ArticleController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ArticleModule-5a64d3f23dbfc498c2ec7ba42e5372cb4310c4de2153142950ee653f536d725440944aafaeefc868a61dade46bc6037b2360a9c98b4645a8a051877a457d7ec7"' : 'data-target="#xs-injectables-links-module-ArticleModule-5a64d3f23dbfc498c2ec7ba42e5372cb4310c4de2153142950ee653f536d725440944aafaeefc868a61dade46bc6037b2360a9c98b4645a8a051877a457d7ec7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ArticleModule-5a64d3f23dbfc498c2ec7ba42e5372cb4310c4de2153142950ee653f536d725440944aafaeefc868a61dade46bc6037b2360a9c98b4645a8a051877a457d7ec7"' :
                                        'id="xs-injectables-links-module-ArticleModule-5a64d3f23dbfc498c2ec7ba42e5372cb4310c4de2153142950ee653f536d725440944aafaeefc868a61dade46bc6037b2360a9c98b4645a8a051877a457d7ec7"' }>
                                        <li class="link">
                                            <a href="injectables/ArticleService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArticleService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link" >ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProfileModule-c26cfe5d2c5b9a70ad9a321e4025f997956307286ab8d8098eae929e88dd705025fc69929dbecf8da60c7ba36029b6ec26158367f696d49337172868ed29712f"' : 'data-target="#xs-controllers-links-module-ProfileModule-c26cfe5d2c5b9a70ad9a321e4025f997956307286ab8d8098eae929e88dd705025fc69929dbecf8da60c7ba36029b6ec26158367f696d49337172868ed29712f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProfileModule-c26cfe5d2c5b9a70ad9a321e4025f997956307286ab8d8098eae929e88dd705025fc69929dbecf8da60c7ba36029b6ec26158367f696d49337172868ed29712f"' :
                                            'id="xs-controllers-links-module-ProfileModule-c26cfe5d2c5b9a70ad9a321e4025f997956307286ab8d8098eae929e88dd705025fc69929dbecf8da60c7ba36029b6ec26158367f696d49337172868ed29712f"' }>
                                            <li class="link">
                                                <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProfileModule-c26cfe5d2c5b9a70ad9a321e4025f997956307286ab8d8098eae929e88dd705025fc69929dbecf8da60c7ba36029b6ec26158367f696d49337172868ed29712f"' : 'data-target="#xs-injectables-links-module-ProfileModule-c26cfe5d2c5b9a70ad9a321e4025f997956307286ab8d8098eae929e88dd705025fc69929dbecf8da60c7ba36029b6ec26158367f696d49337172868ed29712f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProfileModule-c26cfe5d2c5b9a70ad9a321e4025f997956307286ab8d8098eae929e88dd705025fc69929dbecf8da60c7ba36029b6ec26158367f696d49337172868ed29712f"' :
                                        'id="xs-injectables-links-module-ProfileModule-c26cfe5d2c5b9a70ad9a321e4025f997956307286ab8d8098eae929e88dd705025fc69929dbecf8da60c7ba36029b6ec26158367f696d49337172868ed29712f"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TagModule.html" data-type="entity-link" >TagModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TagModule-09e3dfcd395c8d18b17030b038aa4010964e3867656170ecafeb576b3b37e6e4663960124c63860985849fcf6b725ca8f622e93908d7d10646693b17fea5b349"' : 'data-target="#xs-controllers-links-module-TagModule-09e3dfcd395c8d18b17030b038aa4010964e3867656170ecafeb576b3b37e6e4663960124c63860985849fcf6b725ca8f622e93908d7d10646693b17fea5b349"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TagModule-09e3dfcd395c8d18b17030b038aa4010964e3867656170ecafeb576b3b37e6e4663960124c63860985849fcf6b725ca8f622e93908d7d10646693b17fea5b349"' :
                                            'id="xs-controllers-links-module-TagModule-09e3dfcd395c8d18b17030b038aa4010964e3867656170ecafeb576b3b37e6e4663960124c63860985849fcf6b725ca8f622e93908d7d10646693b17fea5b349"' }>
                                            <li class="link">
                                                <a href="controllers/TagController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TagModule-09e3dfcd395c8d18b17030b038aa4010964e3867656170ecafeb576b3b37e6e4663960124c63860985849fcf6b725ca8f622e93908d7d10646693b17fea5b349"' : 'data-target="#xs-injectables-links-module-TagModule-09e3dfcd395c8d18b17030b038aa4010964e3867656170ecafeb576b3b37e6e4663960124c63860985849fcf6b725ca8f622e93908d7d10646693b17fea5b349"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TagModule-09e3dfcd395c8d18b17030b038aa4010964e3867656170ecafeb576b3b37e6e4663960124c63860985849fcf6b725ca8f622e93908d7d10646693b17fea5b349"' :
                                        'id="xs-injectables-links-module-TagModule-09e3dfcd395c8d18b17030b038aa4010964e3867656170ecafeb576b3b37e6e4663960124c63860985849fcf6b725ca8f622e93908d7d10646693b17fea5b349"' }>
                                        <li class="link">
                                            <a href="injectables/TagService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-38a4c5b550f43e7a4901a0876813e28619c733b22a5a26e3f42432736938771d47c438db95dba4d3f5e04e525f154a7cdc35343320681b98e0951d328c006dac"' : 'data-target="#xs-controllers-links-module-UserModule-38a4c5b550f43e7a4901a0876813e28619c733b22a5a26e3f42432736938771d47c438db95dba4d3f5e04e525f154a7cdc35343320681b98e0951d328c006dac"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-38a4c5b550f43e7a4901a0876813e28619c733b22a5a26e3f42432736938771d47c438db95dba4d3f5e04e525f154a7cdc35343320681b98e0951d328c006dac"' :
                                            'id="xs-controllers-links-module-UserModule-38a4c5b550f43e7a4901a0876813e28619c733b22a5a26e3f42432736938771d47c438db95dba4d3f5e04e525f154a7cdc35343320681b98e0951d328c006dac"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-38a4c5b550f43e7a4901a0876813e28619c733b22a5a26e3f42432736938771d47c438db95dba4d3f5e04e525f154a7cdc35343320681b98e0951d328c006dac"' : 'data-target="#xs-injectables-links-module-UserModule-38a4c5b550f43e7a4901a0876813e28619c733b22a5a26e3f42432736938771d47c438db95dba4d3f5e04e525f154a7cdc35343320681b98e0951d328c006dac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-38a4c5b550f43e7a4901a0876813e28619c733b22a5a26e3f42432736938771d47c438db95dba4d3f5e04e525f154a7cdc35343320681b98e0951d328c006dac"' :
                                        'id="xs-injectables-links-module-UserModule-38a4c5b550f43e7a4901a0876813e28619c733b22a5a26e3f42432736938771d47c438db95dba4d3f5e04e525f154a7cdc35343320681b98e0951d328c006dac"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ArticleController.html" data-type="entity-link" >ArticleController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProfileController.html" data-type="entity-link" >ProfileController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TagController.html" data-type="entity-link" >TagController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/ArticleEntity.html" data-type="entity-link" >ArticleEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/FollowEntity.html" data-type="entity-link" >FollowEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TagEntity.html" data-type="entity-link" >TagEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserEnitity.html" data-type="entity-link" >UserEnitity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddFavoritesRelationsBetweenArticleAndUser1658659352075.html" data-type="entity-link" >AddFavoritesRelationsBetweenArticleAndUser1658659352075</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddFollowsRelationTable1658668825878.html" data-type="entity-link" >AddFollowsRelationTable1658668825878</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddRelationsBetweenArticleAndUser1658591658979.html" data-type="entity-link" >AddRelationsBetweenArticleAndUser1658591658979</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddUsernameToUsers1658152414900.html" data-type="entity-link" >AddUsernameToUsers1658152414900</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateArticleDto.html" data-type="entity-link" >CreateArticleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateArticles1658590819603.html" data-type="entity-link" >CreateArticles1658590819603</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTags1658063174837.html" data-type="entity-link" >CreateTags1658063174837</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUsers1658070509018.html" data-type="entity-link" >CreateUsers1658070509018</a>
                            </li>
                            <li class="link">
                                <a href="classes/FindAllQueryDto.html" data-type="entity-link" >FindAllQueryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/InitialSeed1658665867977.html" data-type="entity-link" >InitialSeed1658665867977</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArticleService.html" data-type="entity-link" >ArticleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthMiddleware.html" data-type="entity-link" >AuthMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BackendValidationPipe.html" data-type="entity-link" >BackendValidationPipe</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfileService.html" data-type="entity-link" >ProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TagService.html" data-type="entity-link" >TagService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ArticleResponseInterface.html" data-type="entity-link" >ArticleResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ArticlesResponseInterface.html" data-type="entity-link" >ArticlesResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ExpressRequest.html" data-type="entity-link" >ExpressRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITagsResponse.html" data-type="entity-link" >ITagsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileResponseInterface.html" data-type="entity-link" >ProfileResponseInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserJwtPayload.html" data-type="entity-link" >UserJwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserResponseInterface.html" data-type="entity-link" >UserResponseInterface</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});