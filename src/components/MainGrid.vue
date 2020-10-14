<template>
    <v-container fluid class="pt-3 mt-3">
        <v-row no-gutters v-for="(row, row_idx) in getPattern" :key="row_idx" justify="center" >
            <template v-for="(col, col_idx) in row">
                <v-hover v-slot:default="{ hover }" :key="col_idx">
                    <v-col @click.left.prevent="openCell({
                                row: row_idx,
                                col: col_idx
                            })">
                        <v-card 
                            :class="[{'on-hover': hover},'square-card','flex-center']" 
                            elevation="4" 
                            outlined
                        >
                            <div v-if="col.show">
                                <span class="font-weight-bold">{{ col.data }}</span>
                            </div>
                        </v-card>
                    </v-col>
                </v-hover>
            </template>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            getPattern: 'mainGrid/getPattern'
        }),
    },
    methods: {
        ...mapActions({
            setPattern: 'mainGrid/setPattern',
            openCell: "mainGrid/openCell"
        })
    },
    created() {
        this.setPattern()
    }
}
</script>

<style scoped>
.col {
    flex-basis: 0;
    flex-grow: 0;
    max-width: 100%;
}

.square-card {
  height: 2rem;
  width: 2rem;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.col {
  flex-grow: 0;
}
.on-hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1) !important;
}
</style>