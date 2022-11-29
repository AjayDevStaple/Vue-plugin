<?php

namespace wp_vue_starter\includes;

class Frontend
{
    public function __construct()
    {
        add_shortcode('wp-vue-frontend-app', [$this, 'render_frontend']);
    }

    public function render_frontend($atts, $content = '')
    {
//        wp_enqueue_style('wp-vue-frontend');
//        wp_enqueue_script('wp-vue-frontend');

        wp_register_script('wp-vue-manifest', WP_VUE_PLUGIN_URL . 'public/js/manifest.js', [], rand(), true);
        wp_register_script('wp-vue-vendor', WP_VUE_PLUGIN_URL . 'public/js/vendor.js', ['wp-vue-manifest'], rand(), true);
        wp_register_script('wp-vue-frontend', WP_VUE_PLUGIN_URL . 'public/js/frontend.js', ['wp-vue-vendor'], rand(), true);

        wp_enqueue_script('wp-vue-manifest');
        wp_enqueue_script('wp-vue-vendor');
        wp_enqueue_script('wp-vue-frontend');

        wp_register_style('wp-vue-primeflex', 'https://unpkg.com/primeflex/primeflex.css');
        wp_enqueue_style('wp-vue-primeflex');

        wp_register_style('wp-vue-bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css');
        wp_enqueue_style('wp-vue-bootstrap');

        wp_register_style('wp-vue-font-awsome', 'https://use.fontawesome.com/releases/v5.8.1/css/all.css');
        wp_enqueue_style('wp-vue-font-awsome');
        
        wp_register_style('wp-vue-primeicons', 'https://unpkg.com/primeicons/primeicons.css');
        wp_enqueue_style('wp-vue-primeicons');

        wp_register_style('wp-vue-primetheme', 'https://unpkg.com/primevue/resources/themes/mdc-light-indigo/theme.css');
        wp_enqueue_style('wp-vue-primetheme');

        wp_register_style('wp-vue-frontend', WP_VUE_PLUGIN_URL . 'includes/frontend.css');
        wp_enqueue_style('wp-vue-frontend');

        wp_register_script( 'my_child_script',WP_VUE_PLUGIN_URL . 'includes/nav.js', [], rand(), true );
        wp_enqueue_script('my_child_script');

        wp_localize_script('wp-vue-frontend', 'wpFrontendLocalizer', [
            'adminUrl' => admin_url('/'),
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'apiUrl' => home_url('/wp-json'),
            'devApiUrl' => home_url('index.php?rest_route='),
            'test' => [
                "id" => 1,
                "text" => "Hello Danish!"
            ]
        ]);

        $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        $content .= '<div class="Main-div">
                        <nav class="navbar navbar-expand-lg navbar-dark">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="cstm-url nav-item active">
                                        <a class="nav-link" href="'.$actual_link.'#/registration">Section registration</a>
                                    </li>
                                    <li class="cstm-url nav-item">
                                        <a class="nav-link" href="'.$actual_link.'#/physician_registration">Physician registration</a>
                                    </li>
                                    <li class="cstm-url nav-item">
                                        <a class="nav-link" href="#">See clinic number query</a>
                                    </li>
                                    <li class="cstm-url nav-item">
                                        <a class="nav-link" href="'.$actual_link.'#/inquiry_cancellation">Inquiry and Cancellation</a>
                                    </li>
                                    <li class="cstm-url nav-item">
                                        <a class="nav-link"href="'.$actual_link.'#/stop_consultation_query">Stop consultation query</a>
                                    </li>
                                    <li class="cstm-url nav-item">
                                        <a class="nav-link" href="'.$actual_link.'#/register_remedy">Make an appointment to pick up medicine</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>';

        $content .= '<div id="wp-vue-frontend-app"></div>';

        return $content;
    }
}