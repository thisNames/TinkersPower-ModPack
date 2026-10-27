Adding your own font:
    In the Resources folder you can place custom fonts in the format of PNGs
as long as it fits the following format:

Numbers must be in this order 1234567890C.
(The C stands for an optional critical indicator damage, it can be present or not)
All digits must remain inside the boundaries of the character box, for thinner
or shorter characters the minecraft TextRenderer takes care of correctly rendering
them without empty areas between digits, as long as they remain entirely inside
their designated area.

Supported resolutions:
    Each square character can range from 8x8 to 32x32.
    This means that for example: A font png with characters of 16x16 pixels, will end up
    having a total resolution of 16x160 (or 16x176 if it has a critical indicator)

File naming:
    Use lowercase letters, numbers, and underscores only.
    Image format has to be png

Examples:
    - medieval_font_1.png
    - font_futuristic.png

After adding files, reload them in-game using the config menu.
The json file corresponding to the font will be created automatically.
