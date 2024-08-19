<template>
  <v-card>
    <v-tabs
      v-model="tab"
    >
      <v-tab value="one">Artworks</v-tab>
      <v-tab value="two">Happenings</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="one">
         
# BRC 2024 Artworks

## Art & beauty salon

## Twisted portrait wall

## Glory hole nail salon

## Temporary neon face tattoos

## Inflated finger lounge

## Video synth projections

## Bum Knee-izer

## Lair of the Glow Worm

## Floricle

        </v-tabs-window-item>

        <v-tabs-window-item value="two">
          
          
          <GJEvent 
  title="Neighbor Reacharound"
  description="Getting friendly"
  date="Sunday burn week"
  thumbnail="/path/to/yoga.jpg"
  link="https://example.com/calendar/event"
/>

<GJEvent 
  title="Glow Down the Rabbit Hole"
  description="tk"
  date="Monday burn week"
  thumbnail="/path/to/yoga.jpg"
  link="https://example.com/calendar/event"
/>

<GJEvent 
  title="Lair of the Glow Worm"
  description="tk"
  date="Tuesday burn week"
  thumbnail="/path/to/yoga.jpg"
  link="https://example.com/calendar/event"
/>

<GJEvent 
  title="Bum Knee!"
  description="Come n get yrs. We got plenty."
  date="Thursday burn week"
  thumbnail="/path/to/yoga.jpg"
  link="https://example.com/calendar/event"
/>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<script>
import { ref } from 'vue'

const tab = ref('one')
  export default {
    data: () => ({
      tab: null,
    }),
  }
</script>