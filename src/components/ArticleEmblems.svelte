<script>
    import moment from 'moment'

    export let publishDate
    export let description
    export let tags
</script>

<style>
    .leadIn {
        padding-top: 4em;
        max-width: 80em;
        margin-left: auto;
        margin-right: auto;
        color: var(--c-white);
        background-color: var(--t-bg);
        text-align: center;
    }

    .tagline {
        font-weight: 300;
        font-size: var(--f-u1);
        line-height: 1.5;
    }

    .tags {
        max-width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .top {
        max-width: 58em;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .tag {
        margin: 0.5em;
        display: inline-block;
        color: var(--t-bg);
        background-color: var(--c-white);
        padding: 0.1rem 0.6rem;
        border-radius: var(--border);
        text-transform: uppercase;
    }
</style>

<div class="leadIn">
    <div class="top">
        <div class="tags">
            {#each tags as t}
                <span class="tag">{t}</span>
            {/each} 
        </div>
        <div class="date">
            <i class="fas fa-calendar"></i>
            {moment(new Date(publishDate)).fromNow()}
        </div>
    </div>
    <h3 class="tagline">{description}</h3>
</div>