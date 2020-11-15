<template lang="pug">
    .card
        .card-image
            figure.image.is-1by1
                img(:src="track.album.cover_xl")
        
        .card-content
            .media
                .media-left
                    figure.image.is-48x48
                        img(:src="track.album.cover_small")
                .media-content
                    p.title.is-6
                        strong {{ track.title}}
                    p.subtitle.is-6 {{ track.artist.name }}
            
        .content
            small {{track.duration}}
            nav.level
                .level-left
                    a.level-item
                        span.icon.is-small(@click="selectTrack")
                            <<<
</template>

<script>
export default {
    props:{
        track:{
            type:Object, required:true
        }
    },
    methods:{
        selectTrack(){
            this.$emit('select',this.track.id)
        }
    }
}
</script>