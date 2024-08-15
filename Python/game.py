import moderngl
import numpy as np
from pyglet import window
from pyglet.gl import *

ctx = moderngl.create_context(standalone=True)

program = ctx.program(
    vertex_shader='''
    #version 330

    in vec3 position;
    in vec3 color;

    out vec3 fColor;

    void main() {
        fColor = color;
        gl_Position = vec4(position, 1.0);
    }
    ''',
    fragment_shader='''
        #version 330

        in vec3 fColor;
        out vec4 fragColor;

        void main() {
            fragColor = vec4(fColor, 1.0);
        }
    ''',
)

vertices = np.array([-0.5, -0.5, 0.0, 1.0, 0.0, 0.0,
                      0.5, -0.5, 0.0, 0.0, 1.0, 0.0,
                      0.0,  0.5, 0.0, 0.0, 0.0, 1.0], dtype='f4')

vbo = ctx.buffer(vertices.astype('f4'))

# Create a VAO and bind the VBO to it
vao = ctx.vertex_array(program, [
    vbo.bind('position', 'color', layout='3f 3f')
])

win = window.Window(512, 512, resizable=True)
win.set_caption("ModernGL Triangle")

@win.event
def on_draw():
    ctx.clear(0.2, 0.2, 0.3)
    vao.render(moderngl.TRIANGLES)

np.set_printoptions(precision=2)
print(vertices.astype('f4'))

print(ctx.error())

pyglet.app.run()