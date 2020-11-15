<template lang="pug">
    .container
        .columns
            .column.is-5.is-offset-4
                .notification.is-danger
                    slot(name="body") Ups algo salio mal :(
</template>
<style scoped lang="scss">
    .notification{
        margin: 10px;
    }
</style>